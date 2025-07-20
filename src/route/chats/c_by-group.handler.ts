import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service";
import {sendSuccess} from "@/utils/response-handler";

const c_byGroupHandler = new LocalHono()

c_byGroupHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const chats = await WhatsappChatService.findBySession(sessionId)
        const groups = chats.filter(chat => chat.isGroup);
        return sendSuccess(c, {
            message: `Success get chats by group client : ${sessionId}`,
            data: groups
        })
    }
)

export default c_byGroupHandler