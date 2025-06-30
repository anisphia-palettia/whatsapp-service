import {LocalHono} from "@/types/LocalHono";
import m_textHandler from "@/route/message/m_text.handler";
import m_withImageHandler from "@/route/message/m_with-image.handler";
import m_broadcastHandler from "@/route/message/m_broadcast.handler";
import m_broadcastWithImageHandler from "@/route/message/m_broadcast-with-image.handler";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {WhatsappMessageService} from "@/service/database/whatsapp-message.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {withChatId} from "@/middleware/with-chatId.ts";

const r_message = new LocalHono()

r_message.route("/text", m_textHandler)
r_message.route("/with-image", m_withImageHandler)
r_message.route("/broadcast", m_broadcastHandler)
r_message.route("/broadcast-with-image", m_broadcastWithImageHandler)

r_message.get("",
    withSessionId(),
    withChatId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const chatId = c.get("chatId")
        const messages = await WhatsappMessageService.findByChatId(chatId)
        const safeMessages = messages.map(msg => ({
            ...msg,
            timestamp: msg.timestamp?.toString(),
        }));
        return sendSuccess(c, {
            message: `Success get messages by chatId`,
            data: {
                sessionId: sessionId,
                chatId: chatId,
                messages: safeMessages
            }
        })
    })

export default r_message