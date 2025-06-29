import {Chat, Contact, WASocket} from "baileys";
import {mapBaileysChatToWhatsappChat} from "@/utils/whatsapp/transformers.ts";
import {mapBaileysMessageToWhatsappMessage} from "@/utils/whatsapp/helpers/mapBaileysMessageToWhatsappMessage.ts";
import * as console from "node:console";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";
import {WhatsappMessageService} from "@/service/database/whatsapp-message.service.ts";
import {saveMediaFromMessage} from "@/utils/whatsapp/save-media-from-message.ts";
import WebSocket, {WebSocketServer} from "ws"

export function WhatsappConnectionEvent(socket: WASocket) {
    return {
        async messagingHistorySetOnce(sessionId: string): Promise<void> {
            return new Promise((resolve) => {
                const handler = async ({chats, contacts}: { chats: Chat[], contacts: Contact[] }) => {
                    for (const chat of chats) {
                        const contact = contacts.find(c => c.id === chat.id);
                        const data = mapBaileysChatToWhatsappChat(chat, contact, sessionId);
                        await WhatsappChatService.createOrUpdate(data);
                    }

                    socket.ev.off("messaging-history.set", handler);
                    resolve();
                };

                socket.ev.on("messaging-history.set", handler);
            });
        },
        async messageUpsert(sessionId: string) {
            socket.ev.on("messages.upsert", async ({messages}) => {
                for (const message of messages) {
                    try {
                        const mediaPath = await saveMediaFromMessage(message, sessionId, {
                            startByte: 0,
                            endByte: undefined,
                            options: {}
                        });

                        const data = mapBaileysMessageToWhatsappMessage(message, sessionId);
                        data.mediaPath = mediaPath;

                    } catch (err) {
                        console.error(`messages.upsert error`, err);
                    }
                }
            });
        }
    };
}
