import type { WASocket } from "baileys";

const socketMap = new Map<string, WASocket>();

export const WhatsAppSockets = {
    set(sessionId: string, socket: WASocket) {
        socketMap.set(sessionId, socket);
    },

    get(sessionId: string): WASocket | undefined {
        return socketMap.get(sessionId);
    },

    delete(sessionId: string) {
        socketMap.delete(sessionId);
    },

    has(sessionId: string): boolean {
        return socketMap.has(sessionId);
    },

    list(): string[] {
        return Array.from(socketMap.keys());
    },

    entries(): [string, WASocket][] {
        return Array.from(socketMap.entries());
    }
};
