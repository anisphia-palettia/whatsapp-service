import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import validate from "@/middleware/validate";
import {type WhatsAppBroadcastWithImageInput, whatsappMessageSchema} from "@/schema/whatsapp-message.schema";
import {WhatsappSocketMessage} from "@/lib/whatsapp/message";
import {sendSuccess} from "@/utils/response-handler";

const m_broadcastWithImageHandler = new LocalHono()
m_broadcastWithImageHandler.post("",
    withSessionId(),
    validate("form", whatsappMessageSchema.broadcastWithImage),
    async (c) => {
        const sessionId = c.get("sessionId")
        const data = c.req.valid("form") as WhatsAppBroadcastWithImageInput
        await WhatsappSocketMessage(sessionId).broadcastWithImage(data)
        return sendSuccess(c, {
            message: "Success broadcast with image",
            data: {
                sessionId: sessionId,
                recipients: data.recipients,
            }
        })
    }
)

export default m_broadcastWithImageHandler