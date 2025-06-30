import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const c_byGroupHandler = new LocalHono()

c_byGroupHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const chats = await WhatsappChatService.findBySession(sessionId)
        const groups = chats.filter(chat => chat.isGroup);
        return sendSuccess(c, {
            message: `Success get chats by group client : ${sessionId}`,
            data: {
                sessionId: sessionId,
                groups: groups
            }
        })
    }
)

export default c_byGroupHandler