import {Chat, Contact} from 'baileys';
import {IWhatsappChatCreate} from "@/types/IWhatsapp.ts";


export function mapBaileysChatToWhatsappChat(chat: Chat, contact: Contact | undefined, sessionId: string
): IWhatsappChatCreate {

    const name = contact?.name ?? chat.name ?? chat.id;
    return {
        sessionId: sessionId,
        chatId: chat.id,
        name,
        isGroup: chat.id.endsWith('@g.us'),
        unreadCount: chat.unreadCount ?? 0
    };
}
