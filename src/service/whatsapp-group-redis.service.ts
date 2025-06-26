import {redis} from "@/lib/redis";

export const whatsappGroupRedisService = {
    getKey(sessionId: string) {
        return `whatsapp:groups:${sessionId}`
    },
    async get(sessionId: string) {
        const raw = await redis.get(this.getKey(sessionId));
        return raw ? JSON.parse(raw) : null;
    },

    async set(sessionId: string, data: any, ttlSecond = 600) {
        await redis.set(this.getKey(sessionId), JSON.stringify(data), "EX", ttlSecond);
    },

    async clear(sessionId: string) {
        await redis.del(this.getKey(sessionId));
    }
};