import app from "@/app.ts";
import {appConfig} from "@/config/config.ts";
import {logger} from "@/lib/logger.ts";
import {deleteAllQrFromRedis} from "@/utils/delete-all-qr-from-redis.ts";
import {destroyAllWhatsappClients} from "@/utils/destroy-all-whatsapp-client.ts";

async function shutdown(signal: string) {
    logger.info(`${signal} received, cleaning up...`);

    try {
        await deleteAllQrFromRedis();

        logger.info("Destroying WhatsApp clients...");
        await destroyAllWhatsappClients();

        logger.info("Goodbye!");
        process.exit(0);
    } catch (err) {
        logger.error("Error during shutdown:", err);
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

    ["SIGINT", "SIGTERM"].forEach((signal) => {
        process.on(signal, () => shutdown(signal));
    });
}

main();
