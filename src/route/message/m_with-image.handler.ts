import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import validate from "@/middleware/validate";
import {whatsappMessageSchema, type WhatsAppMessageWithImageInput} from "@/schema/whatsapp-message.schema.ts";
import {WhatsappSocketMessage} from "@/lib/whatsapp/message";
import {sendSuccess} from "@/utils/response-handler";
import {isToGroup} from "@/middleware/is-to-group";
import {WhatsappSocketGroup} from "@/lib/whatsapp/group";

const m_withImageHandler = new LocalHono()

m_withImageHandler.post("",
    withSessionId(),
    isToGroup(),
    validate("form", whatsappMessageSchema.withImage),
    async (c) => {
        const data = c.req.valid("form") as WhatsAppMessageWithImageInput
        const sessionId = c.get("sessionId")
        const isToGroup = c.get("isToGroup")
        if (isToGroup) {
            await WhatsappSocketGroup(sessionId).validateGroupAccess(data.recipient);
        }
        await WhatsappSocketMessage(sessionId, isToGroup).withImage(data)
        return sendSuccess(c, {
            message: `Success send image`,
            data: {
                sessionId: sessionId,
                isToGroup: isToGroup,
                recipient: data.recipient,
            }
        })
    }
)

export default m_withImageHandler