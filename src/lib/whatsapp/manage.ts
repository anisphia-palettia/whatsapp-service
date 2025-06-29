import {
    Boom
} from '@hapi/boom';
import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    type WASocket
} from 'baileys'
import fs from 'fs/promises';
import path from 'path';
import {logger} from "@/lib/logger";
import {whatsappQrRedisService} from "@/service/redis/whatsapp-qr-redis.service.ts";
import {HTTPException} from "hono/http-exception";
import {WhatsAppSockets} from "@/lib/whatsapp/data";
import pino from "pino";
import {WsWhatsappHandler} from "@/utils/whatsapp/ws-whatsapp-handler.ts";
import {WhatsappSessionService} from "@/service/database/whatsapp-session.service.ts";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";
import {WhatsappMessageService} from "@/service/database/whatsapp-message.service.ts";

export function WhatsappSocketManage() {
    return {
        getSocketOrThrow(sessionId: string): WASocket {
            const socket = WhatsAppSockets.get(sessionId);
            if (!socket) {
                throw new HTTPException(404, {message: `Socket with sessionId ${sessionId} not found`});
            }
            return socket;
        },

        ensureSocketNotRunning(sessionId: string) {
            if (WhatsAppSockets.has(sessionId)) {
                throw new HTTPException(400, {message: "Socket is already running"});
            }
        },

        async ensureQrNotGenerated(sessionId: string) {
            const qrRedis = await whatsappQrRedisService.getQr(sessionId);
            if (qrRedis) {
                throw new HTTPException(400, {message: "QR already generated, please scan"});
            }
        },

        async start(sessionId: string): Promise<"qr" | "ready"> {
            this.ensureSocketNotRunning(sessionId);
            await this.ensureQrNotGenerated(sessionId);

            const sessionDir = path.resolve('./session', sessionId);
            const {state, saveCreds} = await useMultiFileAuthState(sessionDir);
            const {version} = await fetchLatestBaileysVersion();

            const socket = makeWASocket({
                version,
                auth: state,
                logger: pino({level: 'silent'})
            });

            const wsWhatsappHandler = WsWhatsappHandler(socket)

            WhatsAppSockets.set(sessionId, socket);

            return new Promise((resolve, reject) => {
                let isResolved = false;
                let timedOut = false;
                const hardTimeout = setTimeout(async () => {
                    logger.warn(`Session ${sessionId} expired after 3 minutes`);
                    timedOut = true;
                    await socket.logout();
                    WhatsAppSockets.delete(sessionId);
                    await whatsappQrRedisService.deleteQr(sessionId);
                    await fs.rm(sessionDir, {recursive: true, force: true}).catch(() => {
                    });
                }, 3 * 60 * 1000);


                socket.ev.on('creds.update', saveCreds);

                wsWhatsappHandler.messagingHistorySet(sessionId);

                socket.ev.on('connection.update', async (update) => {
                    const {connection, lastDisconnect, qr} = update;

                    if (qr) {
                        logger.info(`Socket ${sessionId} QR code is ready!`);
                        await whatsappQrRedisService.setQr(sessionId, qr);
                        if (!isResolved) {
                            isResolved = true;
                            resolve("qr");
                        }
                    }

                    if (connection === 'open') {
                        logger.info(`Socket ${sessionId} is ready!`);
                        clearTimeout(hardTimeout);
                        await whatsappQrRedisService.deleteQr(sessionId);
                        if (!isResolved) {
                            isResolved = true;
                            resolve("ready");
                        }
                    }

                    if (connection === 'close') {
                        const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode;

                        if (timedOut) {
                            return;
                        }

                        if (statusCode === DisconnectReason.loggedOut) {
                            logger.warn(`Socket ${sessionId} logged out`);
                            await fs.rm(sessionDir, {recursive: true, force: true}).catch(() => {
                            });
                            await WhatsappChatService.deleteBySession(sessionId);
                            await WhatsappMessageService.deleteBySessionId(sessionId);
                            WhatsAppSockets.delete(sessionId);
                        } else {
                            logger.warn(`Socket ${sessionId} disconnected unexpectedly. Reconnecting...`);
                            await whatsappQrRedisService.deleteQr(sessionId);
                            WhatsAppSockets.delete(sessionId);
                            await this.start(sessionId);
                        }

                        clearTimeout(hardTimeout);
                        if (!isResolved) {
                            isResolved = true;
                            await this.start(sessionId);
                            resolve("qr")
                        }
                    }
                });
            });
        }
    };
}
