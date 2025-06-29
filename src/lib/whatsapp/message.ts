import { WhatsappSocketManage } from "@/lib/whatsapp/manage";
import type {
    WhatsAppBroadcastWithImageInput,
    WhatsAppMessageBroadcastInput,
    WhatsappMessageTextInput,
    WhatsAppMessageWithImageInput,
} from "@/schema/whatsapp-message.schema.ts";
import { saveMedia } from "@/utils/save-media";
import { readFile } from "fs/promises";
import mime from "mime";

export function WhatsappSocketMessage(sessionId: string, isGroup = false) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId);

    function buildTargetId(phoneNumber: string): string {
        if (phoneNumber.includes("@")) return phoneNumber;
        return `${phoneNumber}${isGroup ? "@g.us" : "@s.whatsapp.net"}`;
    }

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
        async text({ text, recipient }: WhatsappMessageTextInput) {
            const targetId = buildTargetId(recipient);
            try {
                await socket.sendMessage(targetId, { text });
            } catch (err: any) {
                throw new Error(`Failed to send text: ${err.message}`);
            }
        },

        async withImage({ image, recipient, caption }: WhatsAppMessageWithImageInput) {
            const targetId = buildTargetId(recipient);
            try {
                const filePath = await saveMedia(image);
                const imageMessage = await prepareImageMessage(filePath, caption);
                await socket.sendMessage(targetId, imageMessage);
            } catch (err: any) {
                throw new Error(`Failed to send image: ${err.message}`);
            }
        },

        async broadcast({ text, recipients }: WhatsAppMessageBroadcastInput) {
            for (const recipient of recipients) {
                const targetId = buildTargetId(recipient);
                try {
                    await socket.sendMessage(targetId, { text });
                } catch (err: any) {
                    console.error(`Failed to send text to ${targetId}: ${err.message}`);
                }
            }
        },

        async broadcastWithImage({ image, recipients, caption }: WhatsAppBroadcastWithImageInput) {
            const filePath = await saveMedia(image);
            const imageMessage = await prepareImageMessage(filePath, caption);

            for (const recipient of recipients) {
                const targetId = buildTargetId(recipient);
                try {
                    await socket.sendMessage(targetId, imageMessage);
                } catch (err: any) {
                    console.error(`Failed to send image to ${targetId}: ${err.message}`);
                }
            }
        },
    };
}
