import {WhatsappSessionService} from "@/service/database/whatsapp-session.service.ts";
import {logger} from "@/lib/logger.ts";
import {WhatsappChatService} from "@/service/database/whatsapp-chat.service.ts";
import {IWhatsappMessageCreate} from "@/types/IWhatsapp.ts";
import * as console from "node:console";
import {proto} from "baileys";
import IWebMessageInfo = proto.IWebMessageInfo;

export async function handleIncomingMessage(data: IWhatsappMessageCreate, sessionId: string, msg: IWebMessageInfo) {

    const session = await WhatsappSessionService.findById(sessionId);
    if (!session?.callbackUrl) {
        logger.warn(`[${sessionId}] Session or callback URL not found`);
        return;
    }

    const chat = await WhatsappChatService.findByChatId(data.chatId);
    if (!chat) {
        logger.warn(`[${sessionId}] Chat not found for chatId: ${data.chatId}`);
        return;
    }

    const payload = {
        name: chat.name,
        ...data,
        msg
    };

    fetch(session.callbackUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
    }).then(async (res) => {
        console.log(res)
        logger.info(`[${sessionId}] Webhook sent. Status: ${res.status}`);
    }).catch((err) => {
        console.log(err);
        logger.error(`[${sessionId}] Failed to send webhook`, err);
    });
}
