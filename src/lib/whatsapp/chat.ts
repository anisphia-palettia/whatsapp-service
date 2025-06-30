import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";

export function WhatsappSocketChat(sessionId: string) {
    return {
        async all() {
            return WhatsappChatService.findBySession(sessionId)
        }
    }
}