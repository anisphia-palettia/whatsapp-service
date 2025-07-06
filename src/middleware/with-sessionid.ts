import type {MiddlewareHandler} from "hono";
import {HTTPException} from "hono/http-exception";
import {WhatsappSessionService} from "@/service/database/whatsapp-session.service";

export function withSessionId(): MiddlewareHandler {
    return async (c, next) => {
        const sessionId = c.req.query("sessionId");
        if (!sessionId) {
            throw new HTTPException(400, {message: "Missing sessionId in query"});
        }
        const exist = await WhatsappSessionService.findById(sessionId);
        if (!exist) throw new HTTPException(
            404,
            {message: `Session not found for sessionId: ${sessionId}`}
        )
        c.set("sessionId", sessionId);
        await next();
    }
}