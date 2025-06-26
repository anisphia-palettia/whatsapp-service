import {redis} from "@/lib/redis";
import {logger} from "@/lib/logger";

export async function deleteAllQrFromRedis() {
    const keys = await redis.keys("qr:*")
    if (keys.length > 0) {
        await redis.del(...keys);
        logger.info(`Deleted ${keys.length} QR keys from Redis.`);
    } else {
        logger.info(("No QR keys found to delete."))
    }
}