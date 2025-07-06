import {WhatsappSocketManage} from "@/lib/whatsapp/manage";
import type {
    WhatsAppBroadcastWithImageInput,
    WhatsAppMessageBroadcastInput,
    WhatsappMessageTextInput,
    WhatsAppMessageWithImageInput,
} from "@/schema/whatsapp-message.schema";
import {saveMedia} from "@/utils/save-media";
import {readFile} from "fs/promises";
import mime from "mime";
import {buildTargetId} from "@/utils/whatsapp/build-targetId";

export function WhatsappSocketMessage(sessionId: string, isGroup = false) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId);

    async function prepareImageMessage(filePath: string, caption?: string) {
        const buffer = await readFile(filePath);
        const mimeType = mime.getType(filePath) || "image/jpeg";

        return {
            image: buffer,
            mimetype: mimeType,
            caption,
        };
    }

    return {
        async text({text, recipient, msg}: WhatsappMessageTextInput) {
            const targetId = buildTargetId(recipient, isGroup);
            try {
                await socket.sendMessage(targetId, {text}, msg ? {quoted: msg} : {});
            } catch (err: any) {
                throw new Error(`Failed to send text: ${err.message}`);
            }
        },

        async withImage({image, recipient, caption}: WhatsAppMessageWithImageInput) {
            const targetId = buildTargetId(recipient, isGroup);
            try {
                const filePath = await saveMedia(image);
                const imageMessage = await prepareImageMessage(filePath, caption);
                await socket.sendMessage(targetId, imageMessage);
            } catch (err: any) {
                throw new Error(`Failed to send image: ${err.message}`);
            }
        },

        async broadcast({text, recipients}: WhatsAppMessageBroadcastInput) {
            for (const recipient of recipients) {
                const targetId = buildTargetId(recipient, isGroup);
                try {
                    await socket.sendMessage(targetId, {text});
                } catch (err: any) {
                    console.error(`Failed to send text to ${targetId}: ${err.message}`);
                }
            }
        },

        async broadcastWithImage({image, recipients, caption}: WhatsAppBroadcastWithImageInput) {
            const filePath = await saveMedia(image);
            const imageMessage = await prepareImageMessage(filePath, caption);

            for (const recipient of recipients) {
                const targetId = buildTargetId(recipient, isGroup);
                try {
                    await socket.sendMessage(targetId, imageMessage);
                } catch (err: any) {
                    console.error(`Failed to send image to ${targetId}: ${err.message}`);
                }
            }
        },
    };
}
