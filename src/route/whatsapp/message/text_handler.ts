import {LocalHono} from "@/types/LocalHono.ts";
import {whatsappClientMessage} from "@/lib/whatsapp/message.ts";
import validate from "@/middleware/validate.ts";
import {whatsappMessageSchema, type WhatsappMessageTextInput} from "@/schema/whatsapp-message-schema.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";

const text_handler = new LocalHono()

text_handler.post("",
    withSessionId(),
    validate("json", whatsappMessageSchema.text),
    async (c) => {
        const data = c.req.valid("json") as WhatsappMessageTextInput
        const sessionId = c.req.query("sessionId") as string;
        await whatsappClientMessage(sessionId).text(data)
        return sendSuccess(c, {
            message: "Success send text",
            data: {
                sessionId: sessionId,
                message: data.text,
                to: data.recipient
            }
        })
    })

export default text_handler;