import {prisma} from "@/lib/prisma-client";
import {IWhatsappMessageCreate} from "@/types/IWhatsapp";

export const WhatsappMessageService = {
    create(data: IWhatsappMessageCreate) {
        return prisma.whatsappMessage.create({data});
    },

    createOrUpdate(data: IWhatsappMessageCreate) {
        if (!data.messageId) throw new Error('messageId is required for upsert');

        return prisma.whatsappMessage.upsert({
            where: {
                messageId: data.messageId
            },
            update: {
                fromMe: data.fromMe,
                senderId: data.senderId,
                messageType: data.messageType,
                text: data.text,
                mediaPath: data.mediaPath,
                timestamp: data.timestamp,
                updatedAt: new Date()
            },
            create: data
        });
    },

    findByChatId(chatId: string) {
        return prisma.whatsappMessage.findMany({
            where: {chatId},
            orderBy: {timestamp: 'asc'}
        });
    },

    findByMessageId(messageId: string) {
        return prisma.whatsappMessage.findUnique({
            where: {
                messageId,
            }
        });
    },

    deleteBySessionId(sessionId: string) {
        return prisma.whatsappMessage.deleteMany(
            {where: {sessionId}}
        )
    }
};
