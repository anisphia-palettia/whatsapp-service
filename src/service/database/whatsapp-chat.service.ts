// src/services/whatsappChat.service.ts

import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappChatCreate, IWhatsappChatUpdate} from "@/types/IWhatsapp.ts";

export const WhatsappChatService = {
    create(data: IWhatsappChatCreate) {
        return prisma.whatsappChat.create({data});
    },

    findByChatId(sessionId: string, chatId: string) {
        return prisma.whatsappChat.findUnique({
            where: {
                sessionId_chatId: {
                    sessionId,
                    chatId
                }
            }
        });
    },

    findBySession(sessionId: string) {
        return prisma.whatsappChat.findMany({
            where: {sessionId}
        });
    },

    updateUnreadCount(chatId: string, data: IWhatsappChatUpdate) {
        return prisma.whatsappChat.update({
            where: {id: chatId},
            data
        });
    }
};
