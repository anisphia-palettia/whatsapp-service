import {LocalHono} from "@/types/LocalHono.ts";
import validate from "@/middleware/validate.ts";
import {type WhatsappManageStartInput, whatsappManageSchema} from "@/schema/whatsapp-manage-schema.ts";
import {whatsappClientManage} from "@/lib/whatsapp/manage.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {HTTPException} from "hono/http-exception";

const start_handler = new LocalHono()

start_handler.post("", validate("json", whatsappManageSchema.start), async (c) => {
    const data = c.req.valid("json") as WhatsappManageStartInput
    const result = await whatsappClientManage().start(data)
    if (!result) {
        throw new HTTPException(400, {
            message: "Failed to start whatsapp client"
        })
    }
    return sendSuccess(c, {
        message: `Success start whatsapp client, please scan the qr code in /whatsapp/qr/?sessionId:${data.sessionId}`
    })
})

export default start_handler