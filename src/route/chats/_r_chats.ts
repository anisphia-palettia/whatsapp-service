import {LocalHono} from "@/types/LocalHono";
import c_allHandler from "@/route/chats/c_all.handler";
import c_byGroupHandler from "@/route/chats/c_by-group.handler";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service";
import {HTTPException} from "hono/dist/types/http-exception";
import {sendSuccess} from "@/utils/response-handler";

const r_chats = new LocalHono()

r_chats.route("/all", c_allHandler)
r_chats.route("/group", c_byGroupHandler)

r_chats.get("/:chatId",
    async (c) => {
        const {chatId} = c.req.param()
        const chat = await WhatsappChatService.findByChatId(chatId)
        if (!chat) throw new HTTPException(404, {message: `Chat not found for chatId: ${chatId}`})
        return sendSuccess(c, {
            message: `Success get chat by id client : ${chatId}`,
            data: chat
        })
    }
)

export default r_chats