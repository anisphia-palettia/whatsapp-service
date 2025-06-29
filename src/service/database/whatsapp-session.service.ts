import {prisma} from "@/lib/prisma-client.ts";
import {IWhatsappSessionUpdate} from "@/types/IWhatsapp.ts";
import {SessionCreateInput} from "@/schema/session.schema.ts";

export const WhatsappSessionService = {
    create(data: SessionCreateInput) {
        return prisma.whatsappSession.create({data});
    },

    findById(id: string) {
        return prisma.whatsappSession.findUnique({where: {id}});
    },

    findAll() {
        return prisma.whatsappSession.findMany();
    },

    update(id: string, data: Partial<IWhatsappSessionUpdate>) {
        return prisma.whatsappSession.update({
            where: {id},
            data
        });
    },

    delete(id: string) {
        return prisma.whatsappSession.delete({where: {id}});
    }
};