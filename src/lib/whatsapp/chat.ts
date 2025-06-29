import {WhatsappSocketManage} from "@/lib/whatsapp/manage.ts";

import * as console from "node:console";

export function WhatsappSocketChat(sessionId: string) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId);
    return {
        async all() {

        }
    }
}