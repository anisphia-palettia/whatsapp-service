import {Chat, Contact} from 'baileys';
import {IWhatsappChatCreate} from "@/types/IWhatsapp.ts";

export function mapBaileysChatToWhatsappChat(
    chat: Chat,
    contacts?: Contact[]
): IWhatsappChatCreate {
    const contactMap = new Map<string, string>();
    contacts?.forEach(c => c.id && c.name && contactMap.set(c.id, c.name));

    const name = contactMap.get(chat.id) ?? chat.name ?? chat.id;

    return {
        chatId: chat.id,
        name,
        isGroup: chat.id.endsWith('@g.us'),
        unreadCount: chat.unreadCount ?? 0
    };
}
