import {z} from "zod";
import {imageValidator} from "@/schema/image-validator.ts";

export const whatsappMessageSchema = {
    text: z.object({
        text: z.string().min(1),
        recipient: z.string().min(1),
    }),
    withImage: z.object({
        recipient: z.string().min(1),
        caption: z.string().optional(),
        image: imageValidator,
    })
}

export type WhatsappMessageTextInput = z.infer<typeof whatsappMessageSchema.text>
export  type WhatsAppMessageWithImageInput = z.infer<typeof whatsappMessageSchema.withImage>