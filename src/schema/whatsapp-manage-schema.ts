import {z} from "zod";

export const whatsappManageSchema = {
    start: z.object({
        sessionId: z.string().min(1),
    }),
}

export  type WhatsappManageStartInput = z.infer<typeof whatsappManageSchema.start>