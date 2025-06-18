import {WhatsappClientManage} from "@/lib/whatsapp/manage.ts";
import type {
    WhatsAppBroadcastWithImageInput,
    WhatsAppMessageBroadcastInput,
    WhatsappMessageTextInput,
    WhatsAppMessageWithImageInput
} from "@/schema/whatsapp-message-schema.ts";
import {saveMedia} from "@/utils/save-media.ts";
import {MessageMedia} from "whatsapp-web.js";

export function WhatsappClientMessage(sessionId: string, isGroup: boolean = false) {
    const client = WhatsappClientManage().getClientOrThrow(sessionId);

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
                throw new Error(`Failed to send text: ${err.message}`);
            }
        },
        async withImage({image, recipient, caption}: WhatsAppMessageWithImageInput) {
            const formatTargetId = buildWhatsappTargetId(recipient);
            try {
                const filePath = await saveMedia(image);
                const media = MessageMedia.fromFilePath(filePath);
                return client.sendMessage(formatTargetId, media, caption ? {caption} : {});
            } catch (err: any) {
                throw new Error(`Failed to send image: ${err.message}`);
            }
        },
        async broadcast({text, recipients}: WhatsAppMessageBroadcastInput) {
            for (const recipient of recipients) {
                await client.sendMessage(buildWhatsappTargetId(recipient), text);
            }
        },
        async broadcastWithImage({image, recipients, caption}: WhatsAppBroadcastWithImageInput) {
            const filePath = await saveMedia(image);
            const media = MessageMedia.fromFilePath(filePath);

            for (const recipient of recipients) {
                const targetId = buildWhatsappTargetId(recipient);
                try {
                    await client.sendMessage(targetId, media, caption ? {caption} : {});
                } catch (err: any) {
                    console.error(`Failed to send image to ${targetId}: ${err.message}`);
                }
            }
        }
    }
}