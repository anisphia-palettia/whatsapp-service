import {proto} from 'baileys';
import {WhatsappMessage} from "@/model/WhatsappMessage.ts";

export function mapBaileysMessageToModel(
    sessionId: string,
    msg: proto.IWebMessageInfo
): Partial<WhatsappMessage> {
    const message = msg.message;
    const type = message ? Object.keys(message)[0] : 'unknown';

    const text =
        message?.conversation ??
        message?.extendedTextMessage?.text ??
        message?.imageMessage?.caption ??
        message?.videoMessage?.caption ??
        undefined;

    return {
        sessionId,
        chatId: msg.key.remoteJid ?? '',
        messageId: msg.key.id ?? '',
        fromMe: msg.key.fromMe ?? false,
        senderId: msg.key.fromMe ? 'me' : msg.key.participant ?? msg.key.remoteJid ?? '',
        messageType: type,
        text,
        caption: message?.imageMessage?.caption ?? message?.videoMessage?.caption ?? undefined,
        mediaPath: undefined,
        timestamp: msg.messageTimestamp ? Number(msg.messageTimestamp) : Date.now()
    }
}
