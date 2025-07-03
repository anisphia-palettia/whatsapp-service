import type {MiddlewareHandler} from "hono";
import {HTTPException} from "hono/http-exception";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service";

export function withChatId(): MiddlewareHandler {
    return async (c, next) => {
        const chatId = c.req.query("chatId");
        if (!chatId) {
            throw new HTTPException(400, {message: "Missing chatId in query"});
        }
        const exist = await WhatsappChatService.findByChatId(chatId);
        if (!exist) throw new HTTPException(404, {message: `Chat not found for chatId: ${chatId}`})
        c.set("chatId", chatId);
        await next();
    }
}