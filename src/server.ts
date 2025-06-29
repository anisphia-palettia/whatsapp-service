import "dotenv/config.js"
import app from "@/app";
import {appConfig} from "@/config/app.config";
import {logger} from "@/lib/logger";
import {deleteAllQrFromRedis} from "@/utils/delete-all-qr-from-redis";
import {destroyAllWhatsappSockets} from "@/utils/destroy-all-whatsapp-client";
import {serve} from "@hono/node-server";
import {WhatsappSocketManage} from "@/lib/whatsapp/manage.ts";

async function shutdown(signal: string) {
    logger.info(`${signal} received, cleaning up...`);

    try {
        await deleteAllQrFromRedis();

        logger.info("Destroying WhatsApp sockets...");
        await destroyAllWhatsappSockets();

        logger.info("Goodbye!");
        process.exit(0);
    } catch (err) {
        logger.error("Error during shutdown:", err);
        process.exit(1);
    }
}


async function main() {
    serve({
        port: appConfig.appPort,
        fetch: app.fetch,
    });
    await WhatsappSocketManage().start("1cbff2af-7dec-45c2-bf41-14c4d9c0099c")
    logger.info(`Server is running on port ${appConfig.appPort}`);

    ["SIGINT", "SIGTERM"].forEach((signal) => {
        process.on(signal, () => shutdown(signal));
    });
}

main();
