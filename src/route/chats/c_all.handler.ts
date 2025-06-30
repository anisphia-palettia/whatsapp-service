import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {WhatsappSocketChat} from "@/lib/whatsapp/chat.ts";

const c_allHandler = new LocalHono()

c_allHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const chats = await WhatsappSocketChat(sessionId).all()
        return sendSuccess(c, {
            message: `Success get all chats client : ${sessionId}`,
            data: {
                sessionId: sessionId,
                chats: chats
            }
        })
    })

export default c_allHandler