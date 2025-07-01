import {z} from "zod";

export const sessionSchema = {
    create: z.object({
        phoneNumber: z.string().min(1),
        callbackUrl: z.string().url().optional()
    })
}

export  type SessionCreateInput = z.infer<typeof sessionSchema.create>;