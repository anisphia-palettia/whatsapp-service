import {LocalHono} from "@/types/LocalHono.ts";
import validate from "@/middleware/validate.ts";
import {SessionCreateInput, sessionSchema} from "@/schema/session.schema.ts";
import {WhatsappSessionService} from "@/service/database/whatsapp-session.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {HTTPException} from "hono/http-exception";

const createHandler = new LocalHono()

createHandler.post("", validate("json", sessionSchema.create), async (c) => {
    const data = c.req.valid("json") as SessionCreateInput
    const exist = await WhatsappSessionService.findByPhoneNumber(data.phoneNumber)
    if (exist) throw new HTTPException(400, {
            message: `Session phone number ${data.phoneNumber} already exist`
        }
    )
    const session = await WhatsappSessionService.create(data)
    return sendSuccess(c, {
        message: "Success create new session",
        data: {
            session,
        }
    })
})

export default createHandler