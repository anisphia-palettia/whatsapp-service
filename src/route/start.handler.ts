import {LocalHono} from "@/types/LocalHono";
import {WhatsappSocketManage} from "@/lib/whatsapp/manage";
import {sendSuccess} from "@/utils/response-handler";
import {HTTPException} from "hono/http-exception";
import {withSessionId} from "@/middleware/with-sessionid";

const startHandler = new LocalHono()

startHandler.post("", withSessionId(), async (c) => {
    const sessionId = c.get("sessionId")
    const result = await WhatsappSocketManage().start(sessionId)
    switch (result) {
        case "qr" :
            return sendSuccess(c, {
                message: `Success start whatsapp socket, please scan the qr code in /whatsapp/qr/?sessionId:${sessionId}`
            })
        case "ready" :
            return sendSuccess(c, {
                message: `Socket : ${sessionId} start successfully`
            })
        default:
            throw new HTTPException(400, {
                message: "Failed to start whatsapp socket"
            })
    }
})

export default startHandler