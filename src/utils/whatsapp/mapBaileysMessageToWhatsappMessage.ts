import {proto} from 'baileys';
import {IWhatsappMessageCreate} from '@/types/IWhatsapp.ts';


export function mapBaileysMessageToWhatsappMessage(
    messages: proto.IWebMessageInfo, sessionId: string
): IWhatsappMessageCreate {
    const message = messages.message;

    const messageType = message ? Object.keys(message)[0] : 'unknown';

    const text =
        message?.conversation ??
        message?.extendedTextMessage?.text ??
        message?.imageMessage?.caption ??
        message?.videoMessage?.caption ??
        null;

    const caption =
        message?.imageMessage?.caption ??
        message?.videoMessage?.caption ??
        null;

    const timestamp = messages.messageTimestamp != null
        ? messages.messageTimestamp.toString()
        : '0';

    return {
        sessionId,
        chatId: messages.key.remoteJid ?? '',
        messageId: messages.key.id ?? '',
        fromMe: messages.key.fromMe ?? false,
        senderId: messages.key.fromMe
            ? 'me'
            : messages.key.participant ?? messages.key.remoteJid ?? '',
        messageType,
        text,
        caption,
        mediaPath: null,
        timestamp,
    };
}
