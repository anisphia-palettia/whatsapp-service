import {whatsappClientManage} from "@/lib/whatsapp/manage.ts";
import type {WhatsappMessageSendTextInput} from "@/schema/whatsapp-message-schema.ts";

export function whatsappClientMessage() {
    return {
        async sendText(sessionId: string, {message, phoneNumber}: WhatsappMessageSendTextInput) {
            const client = whatsappClientManage().getClientOrThrow(sessionId);
            const formattedNumber = phoneNumber.includes("@c.us")
                ? phoneNumber
                : `${phoneNumber}@c.us`;

            try {
                return client.sendMessage(formattedNumber, message);
            } catch (err: any) {
                throw new Error(`Failed to send message: ${err.message}`);
            }
        }
    }
}