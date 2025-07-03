import {LocalHono} from "@/types/LocalHono";
import validate from "@/middleware/validate";
import {type WhatsAppMessageBroadcastInput, whatsappMessageSchema} from "@/schema/whatsapp-message.schema";
import {withSessionId} from "@/middleware/with-sessionid";
import {WhatsappSocketMessage} from "@/lib/whatsapp/message";
import {sendSuccess} from "@/utils/response-handler";

const m_broadcastHandler = new LocalHono()

m_broadcastHandler.post("",
    withSessionId(),
    validate("json", whatsappMessageSchema.broadcast),
    async (c) => {
        const sessionId = c.get("sessionId")
        const data = c.req.valid("json") as WhatsAppMessageBroadcastInput
        await WhatsappSocketMessage(sessionId).broadcast(data)
        return sendSuccess(c, {
            message: "Success broadcast text",
            data: {
                sessionId: sessionId,
                recipients: data.recipients,
            }
        })
    }
)

export default m_broadcastHandler