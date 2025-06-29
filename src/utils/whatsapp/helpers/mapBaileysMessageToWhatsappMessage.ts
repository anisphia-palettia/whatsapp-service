import {proto} from 'baileys';
import {IWhatsappMessageCreate} from '@/types/IWhatsapp.ts';

type Options = {
    sessionId: string;
    msg: proto.IWebMessageInfo;
};

export function mapBaileysMessageToWhatsappMessage(
    {msg, sessionId}: Options
): IWhatsappMessageCreate {
    const message = msg.message;

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

    const timestamp = msg.messageTimestamp != null
        ? BigInt(msg.messageTimestamp.toString())
        : BigInt(0);

    return {
        sessionId,
        chatId: msg.key.remoteJid ?? '',
        messageId: msg.key.id ?? '',
        fromMe: msg.key.fromMe ?? false,
        senderId: msg.key.fromMe
            ? 'me'
            : msg.key.participant ?? msg.key.remoteJid ?? '',
        messageType,
        text,
        caption,
        mediaPath: null,
        timestamp,
    };
}
