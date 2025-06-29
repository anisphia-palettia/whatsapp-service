// src/services/whatsappChat.service.ts

import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappChatCreate, IWhatsappChatUpdate} from "@/types/IWhatsapp.ts";

export const WhatsappChatService = {
    create(data: IWhatsappChatCreate) {
        return prisma.whatsappChat.create({data});
    },

    createOrUpdate(data: IWhatsappChatCreate) {
        return prisma.whatsappChat.upsert({
            where: {
                sessionId_chatId: {
                    sessionId: data.sessionId,
                    chatId: data.chatId
                }
            },
            update: data,
            create: data
        });
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
    },

    deleteBySession(sessionId: string) {
        return prisma.whatsappChat.deleteMany({
            where: {sessionId}
        });
    }
};
