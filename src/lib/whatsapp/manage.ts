import {Client, LocalAuth} from "whatsapp-web.js";
import {logger} from "@/lib/logger.ts";
import {WhatsAppClients} from "@/lib/whatsapp/data.ts";
import {whatsappQrRedisService} from "@/service/whatsapp-qr-redis.service.ts";
import {HTTPException} from "hono/http-exception";
import fs from 'fs';
import path from "path";

export function WhatsappClientManage() {
    return {
        getClientOrThrow(sessionId: string): Client {
            const client = WhatsAppClients.get(sessionId);
            if (!client) {
                throw new HTTPException(404, {message: `Client with sessionId ${sessionId} not found`});
            }
            return client;
        },

        ensureClientNotRunning(sessionId: string) {
            const sessionExists = WhatsAppClients.has(sessionId);
            if (sessionExists) {
                throw new HTTPException(400, {message: "Client is already running"});
            }
        },

        async ensureQrNotGenerated(sessionId: string) {
            const qrRedis = await whatsappQrRedisService.getQr(sessionId);
            if (qrRedis) {
                throw new HTTPException(400, {message: "QR already generated, please scan"});
            }
        },

        async start(sessionId: string): Promise<"qr" | "ready"> {
            this.ensureClientNotRunning(sessionId);
            await this.ensureQrNotGenerated(sessionId);

            const client = new Client({
                takeoverOnConflict: true,
                authStrategy: new LocalAuth({
                    clientId: sessionId,
                    dataPath: "./session"
                }),
                puppeteer: {
                    handleSIGINT: false,
                    args: [
                        '--no-sandbox',
                        '--disable-setuid-sandbox',
                    ],
                }
            });

            return new Promise<"qr" | "ready">((resolve, reject) => {
                let isResolved = false

                const hardTimeout = setTimeout(async () => {
                    logger.warn(`Session ${sessionId} expired after 3 minutes`);
                    await client.destroy();
                    await whatsappQrRedisService.deleteQr(sessionId);
                    if (!isResolved) {
                        isResolved = true;
                        reject(new Error("QR not scanned in time, session destroyed"));
                    }
                }, 3 * 60 * 1000);

                client.on("qr", async (qr) => {
                    logger.info(`Client ${sessionId} QR code is ready!`)
                    await whatsappQrRedisService.setQr(sessionId, qr)

                    if (!isResolved) {
                        isResolved = true;
                        resolve("qr");
                    }
                })

                client.on("ready", () => {
                    WhatsAppClients.set(sessionId, client)
                    logger.info(`Client ${sessionId} is ready!`)
                    clearTimeout(hardTimeout);
                    whatsappQrRedisService.deleteQr(sessionId)
                    resolve("ready");
                })

                client.on("auth_failure", () => {
                    WhatsAppClients.delete(sessionId);
                    whatsappQrRedisService.deleteQr(sessionId);
                    logger.error(`Client ${sessionId} authentication failed!`);
                    clearTimeout(hardTimeout);
                    client.destroy();
                    if (!isResolved) {
                        isResolved = true;
                        reject(new Error("Authentication failed"));
                    }
                })

                client.on("disconnected", (reason) => {
                    client.destroy()
                    setTimeout(() => {
                        const folderPath = path.join(process.cwd(), 'session', `session-${sessionId}`);
                        logger.info(`Deleting session folder: ${folderPath}`);

                        fs.rm(folderPath, {recursive: true, force: true}, (err) => {
                            if (err) {
                                logger.error(`Error deleting folder: ${err.message}`);
                            } else {
                                logger.info('Folder deleted successfully');
                            }
                        });
                    }, 2000)
                    WhatsAppClients.delete(sessionId)
                    clearTimeout(hardTimeout);
                    logger.warn(`Client ${sessionId} is disconnected!`)
                })

                client.initialize().catch((err) => {
                    WhatsAppClients.delete(sessionId);
                    whatsappQrRedisService.deleteQr(sessionId);
                    logger.warn(`Client ${sessionId} is disconnected! Reason: ${err}`);

                    clearTimeout(hardTimeout);
                    if (!isResolved) {
                        isResolved = true;
                        reject(new Error("Client disconnected before ready"));
                    }
                });
            })
        }
    }
}