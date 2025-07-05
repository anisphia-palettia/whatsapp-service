// src/services/whatsappChat.service.ts

import {prisma} from "@/lib/prisma-client";
import {IWhatsappChatCreate, IWhatsappChatUpdate} from "@/types/IWhatsapp";

export const WhatsappChatService = {
    create(chatId: string, data: IWhatsappChatCreate) {
        return prisma.whatsappChat.create({data: {id: chatId, ...data}});
    },

    createOrUpdate(data: IWhatsappChatCreate, chatId: string) {
        const cleanData = {
            name: data.name ?? "",
            isGroup: data.isGroup ?? false,
            unreadCount: data.unreadCount ?? 0,
            sessionId: data.sessionId,
        };

        return prisma.whatsappChat.upsert({
            where: {
                id: chatId,
            },
            update: cleanData,
            create: {
                id: chatId,
                ...cleanData,
            }
        });
    },

    findByChatId(chatId: string) {
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
