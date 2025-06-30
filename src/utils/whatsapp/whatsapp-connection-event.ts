import {WAMessage, WASocket} from "baileys";
import {mapBaileysChatToWhatsappChat} from "@/utils/whatsapp/transformers.ts";
import {mapBaileysMessageToWhatsappMessage} from "@/utils/whatsapp/helpers/mapBaileysMessageToWhatsappMessage.ts";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";
import {saveMediaFromMessage} from "@/utils/whatsapp/save-media-from-message.ts";
import {WhatsappMessageService} from "@/service/database/whatsapp-message.service.ts";
import {logger} from "@/lib/logger.ts";

const mediaTypes = ['imageMessage', 'videoMessage', 'documentMessage', 'audioMessage', 'stickerMessage'];

export function WhatsappConnectionEvent(socket: WASocket) {
    async function handleMessage(message: WAMessage, sessionId: string) {
        if (!message.message || !message.key?.id || !message.key?.remoteJid) return;

        const msgKeys = Object.keys(message.message || {});
        const mediaKey = mediaTypes.find(type => msgKeys.includes(type));
        const data = mapBaileysMessageToWhatsappMessage(message, sessionId);

        if (mediaKey) {
            try {
                data.mediaPath = await saveMediaFromMessage(message, sessionId, {
                    startByte: 0,
                    endByte: undefined,
                    options: {}
                });
            } catch (err) {
                logger.error("Failed to save media:", err);
            }
        }

        await WhatsappMessageService.createOrUpdate(data);
    }

    return {
        async messagingHistorySet(sessionId: string): Promise<void> {
            socket.ev.on("messaging-history.set", async ({chats, contacts, messages}) => {
                for (const chat of chats) {
                    const contact = contacts.find(c => c.id === chat.id);
                    const data = mapBaileysChatToWhatsappChat(chat, contact, sessionId);
                    await WhatsappChatService.createOrUpdate(data, chat.id);
                }

                for (const message of messages) {
                    await handleMessage(message, sessionId);
                }
            });
        },

        async messageUpsert(sessionId: string) {
            socket.ev.on("messages.upsert", async ({messages}) => {
                for (const message of messages) {
                    try {
                        await handleMessage(message, sessionId);
                    } catch (err) {
                        logger.error("messages.upsert error", err);
                    }
                }
            });
        }
    };
}
