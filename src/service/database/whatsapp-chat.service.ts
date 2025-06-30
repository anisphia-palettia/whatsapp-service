// src/services/whatsappChat.service.ts

import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappChatCreate, IWhatsappChatUpdate} from "@/types/IWhatsapp.ts";

export const WhatsappChatService = {
    create(chatId: string, data: IWhatsappChatCreate) {
        return prisma.whatsappChat.create({data: {id: chatId, ...data}});
    },

    createOrUpdate(data: IWhatsappChatCreate, chatId: string) {
        return prisma.whatsappChat.upsert({
            where: {
                id: chatId,
            },
            update: data,
            create: {
                id: chatId,
                ...data,
            }
        });
    },

    findByChatId(sessionId: string, chatId: string) {
        return prisma.whatsappChat.findUnique({
            where: {
                id: chatId,
            },
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
