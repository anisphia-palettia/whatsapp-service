import type {MiddlewareHandler} from "hono";

export function isToGroup(): MiddlewareHandler {
    return async (c, next) => {
        const isToGroup = c.req.query("isToGroup");
        if (!isToGroup) {
            throw new Error("Missing isToGroup in query");
        }
        c.set("isToGroup", isToGroup);
        await next();
    };
}
