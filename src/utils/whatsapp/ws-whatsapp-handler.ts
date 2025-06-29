import {WASocket} from "baileys";
import {mapBaileysChatToWhatsappChat} from "@/utils/whatsapp/transformers.ts";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";

export function WsWhatsappHandler(socket: WASocket) {
    return {
        async messagingHistorySet(sessionId: string): Promise<void> {
            socket.ev.on("messaging-history.set", ({chats, messages, contacts}) => {
                chats.map(async (chat) => {
                    const data = {
                        ...mapBaileysChatToWhatsappChat(chat, contacts),
                        sessionId
                    }
                    await WhatsappChatService.create(data)
                })
            })
        }
    }
}