import {Chat, Contact} from 'baileys';
import {IWhatsappChatCreate} from "@/types/IWhatsapp.ts";
import {undefined} from "zod";

type options = {
    sessionId: string,
    chat: Chat
    contacts?: Contact[]
}

export function mapBaileysChatToWhatsappChat({chat, contacts, sessionId}: options
): IWhatsappChatCreate {
    const contactMap = new Map<string, string>();
    contacts?.forEach(c => c.id && c.name && contactMap.set(c.id, c.name));

    const name = contactMap.get(chat.id) ?? chat.name ?? chat.id;

    return {
        sessionId: sessionId,
        chatId: chat.id,
        name,
        isGroup: chat.id.endsWith('@g.us'),
        unreadCount: chat.unreadCount ?? 0
    };
}
