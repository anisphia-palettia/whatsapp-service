import {LocalHono} from "@/types/LocalHono.ts";
import {WhatsappClientManage} from "@/lib/whatsapp/manage.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {HTTPException} from "hono/http-exception";
import {withSessionId} from "@/middleware/with-sessionid.ts";

const startHandler = new LocalHono()

startHandler.post("", withSessionId(), async (c) => {
    const sessionId = c.get("sessionId")
    const result = await WhatsappClientManage().start(sessionId)
    switch (result) {
        case "qr" :
            return sendSuccess(c, {
                message: `Success start whatsapp client, please scan the qr code in /whatsapp/qr/?sessionId:${sessionId}`
            })
        case "ready" :
            return sendSuccess(c, {
                message: `client : ${sessionId} start successfully`
            })
        default:
            throw new HTTPException(400, {
                message: "Failed to start whatsapp client"
            })
    }
})

export default startHandler