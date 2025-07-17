import "dotenv/config.js"
import app from "@/app";
import {appConfig} from "@/config/app.config";
import {deleteAllQrFromRedis} from "@/utils/delete-all-qr-from-redis";
import {destroyAllWhatsappSockets} from "@/utils/destroy-all-whatsapp-client";
import {serve} from "@hono/node-server";

async function shutdown(signal: string) {
    console.log(`${signal} received, cleaning up...`);

    try {
        await deleteAllQrFromRedis();

        console.log("Destroying WhatsApp sockets...");
        await destroyAllWhatsappSockets();

        console.log("Goodbye!");
        process.exit(0);
    } catch (err) {
        console.error("Error during shutdown:", err);
        process.exit(1);
    }
}


async function main() {
    serve({
        port: appConfig.appPort,
        fetch: app.fetch,
    });
    console.log(`Server is running on port ${appConfig.appPort}`);

    ["SIGINT", "SIGTERM"].forEach((signal) => {
        process.on(signal, () => shutdown(signal));
    });
}

main();
