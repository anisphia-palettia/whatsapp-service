import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappMessageCreate} from "@/types/IWhatsapp.ts";
import {defineWebSocketHelper} from "hono/dist/types/helper/websocket";

export const WhatsappMessageService = {
    create(data: IWhatsappMessageCreate) {
        return prisma.whatsappMessage.create({data});
    },

    createOrUpdate(data: IWhatsappMessageCreate) {
        return prisma.whatsappMessage.upsert({
            where: {
                sessionId_messageId: {
                    sessionId: data.sessionId,
                    messageId: data.messageId,
                }
            },
            update: {
                updatedAt: new Date()
            },
            create: data
        });
    },

    findByChat(chatId: string) {
        return prisma.whatsappMessage.findMany({
            where: {chatId},
            orderBy: {timestamp: 'asc'}
        });
    },

    findByMessageId(sessionId: string, messageId: string) {
        return prisma.whatsappMessage.findUnique({
            where: {
                sessionId_messageId: {
                    sessionId,
                    messageId
                }
            }
        });
    },
    deleteBySessionId(sessionId: string) {
        return prisma.whatsappMessage.deleteMany(
            {where: {sessionId}}
        )
    }
};
