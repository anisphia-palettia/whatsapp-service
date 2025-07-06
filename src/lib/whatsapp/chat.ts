import {WhatsappChatService} from "@/service/database/whatsapp-chat.service";

export function WhatsappSocketChat(sessionId: string) {
    return {
        async all() {
            return WhatsappChatService.findBySession(sessionId)
        }
    }
}