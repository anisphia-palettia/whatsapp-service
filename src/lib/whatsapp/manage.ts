import {Client, LocalAuth} from "whatsapp-web.js";
import {logger} from "@/lib/logger.ts";
import {WhatsAppClients} from "@/lib/whatsapp/data.ts";
import type {WhatsappManageStartInput} from "@/schema/whatsapp-manage-schema.ts";
import {whatsappRedisService} from "@/service/whatsapp.redis.service.ts";
import {HTTPException} from "hono/http-exception";

export function whatsappClientManage() {
    return {
        getClientOrThrow(sessionId: string): Client {
            const client = WhatsAppClients.get(sessionId);
            if (!client) {
                throw new HTTPException(404, {message: `Client with sessionId ${sessionId} not found`});
            }
            return client;
        },

        async start({sessionId}: WhatsappManageStartInput): Promise<boolean> {
            const qrRedis = await whatsappRedisService.getQr(sessionId);
            if (qrRedis) {
                throw new HTTPException(400, {message: "Qr generated, please scan qr"});
            }

            const client = new Client({
                authStrategy: new LocalAuth({
                    clientId: sessionId,
                    dataPath: "./session"
                })
            });

            return new Promise<boolean>((resolve, reject) => {
                let isResolved = false

                const hardTimeout = setTimeout(async () => {
                    logger.warn(`Session ${sessionId} expired after 3 minutes`);
                    await client.destroy();
                    await whatsappRedisService.deleteQr(sessionId);
                    if (!isResolved) {
                        isResolved = true;
                        reject(new Error("QR not scanned in time, session destroyed"));
                    }
                }, 3 * 60 * 1000);

                client.on("qr", async (qr) => {
                    logger.info(`Client ${sessionId} QR code is ready!`)
                    await whatsappRedisService.setQr(sessionId, qr)

                    if (!isResolved) {
                        isResolved = true;
                        resolve(true);
                    }
                })

                client.on("ready", async () => {
                    WhatsAppClients.set(sessionId, client)
                    logger.info(`Client ${sessionId} is ready!`)
                    clearTimeout(hardTimeout);
                    await whatsappRedisService.deleteQr(sessionId)
                })

                client.on("auth_failure", () => {
                    WhatsAppClients.delete(sessionId)
                    clearTimeout(hardTimeout);
                    logger.error(`Client ${sessionId} authentication failed!`)
                })

                client.on("disconnected", async (err) => {
                    WhatsAppClients.delete(sessionId)
                    clearTimeout(hardTimeout);
                    logger.warn(`Client ${sessionId} is disconnected!`)
                })

                client.initialize().catch(async (err) => {
                    logger.error(`Client init failed for ${sessionId}`, err);
                    clearTimeout(hardTimeout);
                    if (!isResolved) {
                        isResolved = true;
                        reject(new Error("Failed to initialize client"));
                    }
                });
            })
        }
    }
}