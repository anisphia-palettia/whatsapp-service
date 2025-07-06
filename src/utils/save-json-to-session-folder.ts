import fs from 'fs/promises';
import path from 'path';

export async function saveJsonToSessionFolder(
    sessionId: string,
    fileName: string,
    newData: any[],
    idField: string = 'id'
) {
    const sessionPath = path.resolve('./session', sessionId);
    await fs.mkdir(sessionPath, { recursive: true });

    const filePath = path.join(sessionPath, fileName);

    const existingDataRaw = await fs.readFile(filePath, 'utf-8').catch(() => '[]');
    const existingData = JSON.parse(existingDataRaw);

    const merged = [
        ...existingData.filter((e: any) => !newData.some(n => n[idField] === e[idField])),
        ...newData
    ];

    await fs.writeFile(filePath, JSON.stringify(merged, null, 2), 'utf-8');
}
