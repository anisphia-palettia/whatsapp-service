import {LocalHono} from "@/types/LocalHono.ts";
import validate from "@/middleware/validate.ts";
import {SessionCreateInput, sessionSchema} from "@/schema/session.schema.ts";
import {WhatsappSessionService} from "@/service/database/whatsapp-session.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const createHandler = new LocalHono()

createHandler.post("", validate("json", sessionSchema.create), async (c) => {
    const data = c.req.valid("json") as SessionCreateInput
    const session = await WhatsappSessionService.create(data)
    return sendSuccess(c, {
        message: "Success create new session",
        data: {
            session,
        }
    })
})

export default createHandler