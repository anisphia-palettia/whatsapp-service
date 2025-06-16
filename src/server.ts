import app from "@/app.ts";
import {appConfig} from "@/config/config.ts";
import {logger} from "@/lib/logger.ts";
import {deleteAllQrFromRedis} from "@/utils/delete-all-qr-from-redis.ts";

async function shutdown(signal: string) {
    logger.info(`${signal} received, cleaning up Redis...`);
    try {
        await deleteAllQrFromRedis();
        logger.info("Redis cleaned up. Goodbye!");
        process.exit(0);
    } catch (error) {
        logger.error("Error during cleanup:", error);
        process.exit(1);
    }
}

function main() {
    Bun.serve({
        port: appConfig.port,
        fetch: app.fetch,
        idleTimeout: 0,
    });
    logger.info(`Server is running on port ${appConfig.port}`);

    process.on("SIGINT", () => shutdown("SIGINT"));
}

main();
