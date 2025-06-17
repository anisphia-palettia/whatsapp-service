import {LocalHono} from "@/types/LocalHono.ts";
import {whatsappClientMessage} from "@/lib/whatsapp/message.ts";
import validate from "@/middleware/validate.ts";
import {whatsappMessageSchema, type WhatsappMessageTextInput} from "@/schema/whatsapp-message-schema.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {isToGroup} from "@/middleware/is-to-group.ts";
import {WhatsappClientGroup} from "@/lib/whatsapp/group.ts";

const m_textHandler = new LocalHono()

m_textHandler.post("",
    withSessionId(),
    isToGroup(),
    validate("json", whatsappMessageSchema.text),
    async (c) => {
        const data = c.req.valid("json") as WhatsappMessageTextInput
        const sessionId = c.get("sessionId")
        const isToGroup = c.get("isToGroup");
        console.log("Text  : ", isToGroup)

        if (isToGroup) {
            console.log("Group : ", isToGroup)
            await WhatsappClientGroup(sessionId).validateGroupAccess(data.recipient);
        }
        await whatsappClientMessage(sessionId, isToGroup).text(data)
        return sendSuccess(c, {
            message: "Success send text",
            data: {
                sessionId: sessionId,
                message: data.text,
                isToGroup: isToGroup,
                to: data.recipient
            }
        })
    })

export default m_textHandler;