import {whatsappClientManage} from "@/lib/whatsapp/manage.ts";
import type {WhatsappMessageTextInput, WhatsAppMessageWithImageInput} from "@/schema/whatsapp-message-schema.ts";

export function whatsappClientMessage(sessionId: string) {
    const client = whatsappClientManage().getClientOrThrow(sessionId);

    function formatPhoneNumber(phoneNumber: string): string {
        return phoneNumber.includes("@c.us")
            ? phoneNumber
            : `${phoneNumber}@c.us`;
    }

    return {
        async text({text, recipient}: WhatsappMessageTextInput) {
            const formattedNumber = formatPhoneNumber(recipient);

            try {
                return client.sendMessage(formattedNumber, text);
            } catch (err: any) {
                throw new Error(`Failed to send message: ${err.message}`);
            }
        },
        async withImage({image, recipient, caption}: WhatsAppMessageWithImageInput) {
            const formattedNumber = formatPhoneNumber(recipient);

        }
    }
}