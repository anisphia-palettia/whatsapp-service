import {
    WAMessage,
    downloadMediaMessage, MediaDownloadOptions
} from 'baileys';
import {writeFile, mkdir} from 'fs/promises';
import path from 'path';

export async function saveMediaFromMessage(
    message: WAMessage,
    sessionId: string,
    options?: MediaDownloadOptions
): Promise<string | null> {
    const msg = message.message;
    if (!msg || !message.key.remoteJid) return null;

    const mediaTypes = [
        {key: 'imageMessage', ext: 'jpg'},
        {key: 'videoMessage', ext: 'mp4'},
        {key: 'documentMessage', ext: 'pdf'},
        {key: 'audioMessage', ext: 'mp3'},
        {key: 'stickerMessage', ext: 'webp'}
    ] as const;

    for (const {key, ext} of mediaTypes) {
        if (key in msg) {
            const buffer = await downloadMediaMessage(
                message,
                'buffer',
                {
                    startByte: options?.startByte,
                    endByte: options?.endByte,
                    options: options?.options
                }
            );

            const messageId = message.key.id ?? `${Date.now()}`;
            const fileName = `${messageId}.${ext}`;
            const folderPath = path.join('public', sessionId);
            const filePath = path.join(folderPath, fileName);
            await mkdir(folderPath, {recursive: true});
            await writeFile(filePath, buffer);

            return filePath;
        }
    }

    return null;
}
