import { WhatsAppSockets } from "@/lib/whatsapp/data";
import { logger } from "@/lib/logger";

export async function destroyAllWhatsappSockets() {
    const sockets = WhatsAppSockets.entries();

    logger.info(`Destroying ${sockets.length} WhatsApp socket(s)...`);

    const destroyPromises = sockets.map(async ([sessionId, socket]) => {
        try {
            logger.info(`Destroying WhatsApp socket: ${sessionId}`);
            WhatsAppSockets.delete(sessionId);
        } catch (err) {
            logger.error(`Failed to destroy socket ${sessionId}`, err);
        }
    });

    await Promise.allSettled(destroyPromises);
}
