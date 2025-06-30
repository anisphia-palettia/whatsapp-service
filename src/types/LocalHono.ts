import {Hono} from "hono";

type Variables = {
    sessionId: string;
    isToGroup: boolean;
    chatId: string;
};

export class LocalHono extends Hono<{
    Variables: Variables;
}> {
}