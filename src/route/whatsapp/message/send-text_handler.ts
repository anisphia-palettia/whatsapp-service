import {LocalHono} from "@/types/LocalHono.ts";
import {whatsappClientMessage} from "@/lib/whatsapp/message.ts";
import validate from "@/middleware/validate.ts";
import {whatsappMessageSchema, type WhatsappMessageSendTextInput} from "@/schema/whatsapp-message-schema.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const sendText_handler = new LocalHono()

sendText_handler.post("", validate("json", whatsappMessageSchema.sendText), async (c) => {
    const data = c.req.valid("json") as WhatsappMessageSendTextInput
    const sessionId = c.req.query("sessionId") as string;
    await whatsappClientMessage().sendText(sessionId, data)
    return sendSuccess(c, {
        message: "Success send text",
        data: {
            sessionId: sessionId,
            message: data.message,
            to: data.phoneNumber
        }
    })
})

export default sendText_handler;