import {z} from "zod";

export const sessionSchema = {
    create: z.object({
        phoneNumber: z.string().min(1),
    })
}

export  type SessionCreateInput = z.infer<typeof sessionSchema.create>;