import {whatsappClientManage} from "@/lib/whatsapp/manage.ts";
import type {WhatsappMessageTextInput, WhatsAppMessageWithImageInput} from "@/schema/whatsapp-message-schema.ts";
import {saveMedia} from "@/utils/save-media.ts";
import {MessageMedia} from "whatsapp-web.js";

export function whatsappClientMessage(sessionId: string, isGroup: boolean = false) {
    const client = whatsappClientManage().getClientOrThrow(sessionId);

    function buildWhatsappTargetId(phoneNumber: string): string {
        if (phoneNumber.includes("@")) return phoneNumber;
        return `${phoneNumber}${isGroup ? "@g.us" : "@c.us"}`;
    }

    return {
        async text({text, recipient}: WhatsappMessageTextInput) {
            const formatTargetId = buildWhatsappTargetId(recipient);

            try {
                return client.sendMessage(formatTargetId, text);
            } catch (err: any) {
                throw new Error(`Failed to send message: ${err.message}`);
            }
        },
        async withImage({image, recipient, caption}: WhatsAppMessageWithImageInput) {
            const formatTargetId = buildWhatsappTargetId(recipient);
            const filePath = await saveMedia(image);
            const media = MessageMedia.fromFilePath(filePath);

            return client.sendMessage(formatTargetId, media, caption ? {caption} : {});
        }
    }
}