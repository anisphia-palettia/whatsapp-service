import {z} from "zod";

export const whatsappMessageSchema = {
    sendText: z.object({
        message: z.string().min(1),
        phoneNumber: z.string().min(1)
    })
}

export type WhatsappMessageSendTextInput = z.infer<typeof whatsappMessageSchema.sendText>