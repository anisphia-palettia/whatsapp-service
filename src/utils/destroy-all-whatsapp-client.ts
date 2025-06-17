import {WhatsAppClients} from "@/lib/whatsapp/data.ts";
import {logger} from "@/lib/logger.ts";

export async function destroyAllWhatsappClients() {
    const clients = WhatsAppClients.entries();

    logger.info(`Destroying ${clients.length} WhatsApp client(s)...`);

    const destroyPromises = clients.map(async ([sessionId, client]) => {
        try {
            logger.info(`Destroying WhatsApp client: ${sessionId}`);
            await client.destroy();
            WhatsAppClients.delete(sessionId);
        } catch (err) {
            logger.error(`Failed to destroy client ${sessionId}`, err);
        }
    });

    await Promise.allSettled(destroyPromises);
}
