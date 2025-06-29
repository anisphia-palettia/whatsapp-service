import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappMessageCreate} from "@/types/IWhatsapp.ts";

export const WhatsappMessageService = {
    create(data: IWhatsappMessageCreate) {
        return prisma.whatsappMessage.create({data});
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
    }
};
