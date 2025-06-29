import {WhatsappSocketManage} from "@/lib/whatsapp/manage.ts";


export function WhatsappSocketChat(sessionId: string) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId);
    return {
        async all() {

        }
    }
}