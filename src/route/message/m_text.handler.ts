import {LocalHono} from "@/types/LocalHono";
import {WhatsappSocketMessage} from "@/lib/whatsapp/message";
import validate from "@/middleware/validate";
import {whatsappMessageSchema, type WhatsappMessageTextInput} from "@/schema/whatsapp-message-schema";
import {sendSuccess} from "@/utils/response-handler";
import {withSessionId} from "@/middleware/with-sessionid";
import {isToGroup} from "@/middleware/is-to-group";
import {WhatsappSocketGroup} from "@/lib/whatsapp/group";

const m_textHandler = new LocalHono()

m_textHandler.post("",
    withSessionId(),
    isToGroup(),
    validate("json", whatsappMessageSchema.text),
    async (c) => {
        const data = c.req.valid("json") as WhatsappMessageTextInput
        const sessionId = c.get("sessionId")
        const isToGroup = c.get("isToGroup");
        if (isToGroup) {
            await WhatsappSocketGroup(sessionId).validateGroupAccess(data.recipient);
        }
        await WhatsappSocketMessage(sessionId, isToGroup).text(data)
        return sendSuccess(c, {
            message: "Success send text",
            data: {
                sessionId: sessionId,
                isToGroup: isToGroup,
                recipient: data.recipient
            }
        })
    }
)

export default m_textHandler;