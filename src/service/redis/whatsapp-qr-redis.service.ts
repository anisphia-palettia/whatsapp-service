import {redis} from "@/lib/redis.ts";
import {HTTPException} from "hono/http-exception";
import * as console from "node:console";

export const whatsappQrRedisService = {
    async setQr(sessionId: string, qr: string) {
        await redis.set(`qr:${sessionId}`, qr, "EX", 60 * 5);
    },

    async getQrOrThrow(sessionId: string) {
        const qr = await redis.get(`qr:${sessionId}`);
        if (!qr) {
            throw new HTTPException(404, {message: `QR not found for sessionId: ${sessionId}`});
        }
        return qr;
    },

    async getQr(sessionId: string) {
        return redis.get(`qr:${sessionId}`);
    },

    async deleteQr(sessionId: string) {
        return redis.del(`qr:${sessionId}`);
    },

    async setSession(userId: string, sessionId: string) {
        return redis.set(`session:${userId}`, sessionId);
    },

    async getSession(userId: string) {
        return redis.get(`session:${userId}`);
    },
};
