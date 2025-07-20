import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import {sendSuccess} from "@/utils/response-handler";
import {WhatsappSocketChat} from "@/lib/whatsapp/chat";

const c_allHandler = new LocalHono()

c_allHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const chats = await WhatsappSocketChat(sessionId).all()
        return sendSuccess(c, {
            message: `Success get all chats client : ${sessionId}`,
            data: chats
        })
    })

export default c_allHandler