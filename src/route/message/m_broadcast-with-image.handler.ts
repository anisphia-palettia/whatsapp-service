import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import validate from "@/middleware/validate.ts";
import {type WhatsAppBroadcastWithImageInput, whatsappMessageSchema} from "@/schema/whatsapp-message-schema.ts";
import {WhatsappClientMessage} from "@/lib/whatsapp/message.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const m_broadcastWithImageHandler = new LocalHono()
m_broadcastWithImageHandler.post("",
    withSessionId(),
    validate("form", whatsappMessageSchema.broadcastWithImage),
    async (c) => {
        const sessionId = c.get("sessionId")
        const data = c.req.valid("form") as WhatsAppBroadcastWithImageInput
        await WhatsappClientMessage(sessionId).broadcastWithImage(data)
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