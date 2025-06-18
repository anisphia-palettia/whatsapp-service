import {LocalHono} from "@/types/LocalHono.ts";
import validate from "@/middleware/validate.ts";
import {type WhatsAppMessageBroadcastInput, whatsappMessageSchema} from "@/schema/whatsapp-message-schema.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {WhatsappClientMessage} from "@/lib/whatsapp/message.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const m_broadcastHandler = new LocalHono()

m_broadcastHandler.post("",
    withSessionId(),
    validate("json", whatsappMessageSchema.broadcast),
    async (c) => {
        const sessionId = c.get("sessionId")
        const data = c.req.valid("json") as WhatsAppMessageBroadcastInput
        await WhatsappClientMessage(sessionId).broadcast(data)
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