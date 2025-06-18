import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import validate from "@/middleware/validate.ts";
import {whatsappMessageSchema, type WhatsAppMessageWithImageInput} from "@/schema/whatsapp-message-schema.ts";
import {WhatsappClientMessage} from "@/lib/whatsapp/message.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {isToGroup} from "@/middleware/is-to-group.ts";
import {WhatsappClientGroup} from "@/lib/whatsapp/group.ts";

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
            await WhatsappClientGroup(sessionId).validateGroupAccess(data.recipient);
        }
        await WhatsappClientMessage(sessionId, isToGroup).withImage(data)
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