import {WAMessage, WASocket} from "baileys";
import {mapBaileysChatToWhatsappChat} from "@/utils/whatsapp/transformers";
import {mapBaileysMessageToWhatsappMessage} from "@/utils/whatsapp/mapBaileysMessageToWhatsappMessage";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service";
import {saveMediaFromMessage} from "@/utils/whatsapp/save-media-from-message";
import {WhatsappMessageService} from "@/service/database/whatsapp-message.service";
import {logger} from "@/lib/logger";
import {handleIncomingMessage} from "@/utils/whatsapp/handle-incoming-message";
import {WhatsappSessionService} from "@/service/database/whatsapp-session.service";

const mediaTypes = ['imageMessage', 'videoMessage', 'documentMessage', 'audioMessage', 'stickerMessage'];

export function WhatsappConnectionEvent(socket: WASocket) {

    async function handleMessage(message: WAMessage, sessionId: string) {
        const messageId = message.key?.id;
        const remoteJid = message.key?.remoteJid;


        if (!messageId || !remoteJid) {
            logger.warn(`[${sessionId}] Skipping message with missing key info.`);
            return;
        }

        const isStub = !message.message && message.messageStubType != null;

        if (!message.message && !isStub) {
            logger.warn(`[${sessionId}] Skipping empty message with no stub.`);
            return;
        }

        if (isStub) {
            logger.info(`[${sessionId}] Handling stub message type ${message.messageStubType} for chat ${remoteJid}`);
        }

        let data = mapBaileysMessageToWhatsappMessage(message, sessionId);

        const keys = Object.keys(message.message || {});
        const mediaKey = mediaTypes.find((type) => keys.includes(type));
        if (mediaKey) {
            const mediaPath = await saveMediaFromMessage(message, sessionId);
            if (mediaPath) {
                data.mediaPath = mediaPath;
                logger.info(`[${sessionId}] Media saved at: ${mediaPath}`);
            } else {
                logger.warn(`[${sessionId}] Failed to save media for ${mediaKey}`);
            }
        }

        let chat = await WhatsappChatService.findByChatId(data.chatId);
        if (!chat) {
            const isGroup = data.chatId.endsWith('@g.us');
            const groupName = message.messageStubParameters?.[0] ?? 'New Group';

            chat = await WhatsappChatService.createOrUpdate({
                sessionId,
                name: groupName,
                isGroup,
                unreadCount: 0
            }, data.chatId);

            logger.info(`[${sessionId}] Group chat created from stub message: ${data.chatId} (${groupName})`);
        }

        if (message.message) {
            await WhatsappMessageService.createOrUpdate(data);
            logger.info(`[${sessionId}] Message ${data.messageId} saved.`);
            const session = await WhatsappSessionService.findById(sessionId);
            console.log(session?.callbackUrl)
            await handleIncomingMessage(data, sessionId, message);

        } else {
            logger.debug(`[${sessionId}] Stub-only message. Message data not persisted.`);
        }
    }


    return {
        async messagingHistorySet(sessionId: string): Promise<void> {
            socket.ev.on("messaging-history.set", async ({chats, contacts, messages}) => {
                logger.info(`[${sessionId}] Syncing chat history: ${chats.length} chats, ${messages.length} messages`);

                for (const chat of chats) {
                    const contact = contacts.find(c => c.id === chat.id);
                    const data = mapBaileysChatToWhatsappChat(chat, contact, sessionId);
                    await WhatsappChatService.createOrUpdate(data, chat.id);
                    logger.debug(`[${sessionId}] Synced chat ${chat.id}`);
                }

                for (const message of messages) {
                    try {
                        await handleMessage(message, sessionId);
                    } catch (err: any) {
                        logger.error(`[${sessionId}] Error processing message from history`, err);
                    }
                }
            });
        },

        async messageUpsert(sessionId: string) {
            socket.ev.on("messages.upsert", async ({messages, type}) => {
                if (type != "notify") {
                    return
                }
                logger.info(`[${sessionId}] Incoming messages.upsert: ${messages.length} messages`);
                for (const message of messages) {
                    try {
                        await handleMessage(message, sessionId);
                    } catch (err: any) {
                        logger.error(`[${sessionId}] Error in messageUpsert`, err);
                    }
                }
            });
        },

        async groupsUpdate(sessionId: string) {
            socket.ev.on('group-participants.update', async (event) => {
                const {id: groupId, participants, action} = event;

                logger.info(`[${groupId}] Group participants update: ${action}`);

                const existingChat = await WhatsappChatService.findByChatId(groupId);
                if (!existingChat) {
                    await WhatsappChatService.createOrUpdate({
                        sessionId,
                        name: 'New Group',
                        isGroup: true,
                        unreadCount: 0,
                    }, groupId);

                    logger.info(`[${groupId}] Group chat created via participants update`);
                }
            });
        }
    };
}
