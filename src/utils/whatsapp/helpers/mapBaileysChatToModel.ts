import {Chat, Contact} from 'baileys';
import {WhatsappChat} from "@/model/WhatsappChat.ts";

export function mapBaileysChatToModel(
    sessionId: string,
    chat: Chat,
    contacts?: Contact[]
): Partial<WhatsappChat> {
    const contactMap = new Map<string, string>();
    contacts?.forEach(c => c.id && c.name && contactMap.set(c.id, c.name));

    const name = contactMap.get(chat.id) ?? chat.name ?? chat.id;

    return {
        sessionId,
        chatId: chat.id,
        name,
        isGroup: chat.id.endsWith('@g.us'),
        unreadCount: chat.unreadCount ?? 0
    };
}
