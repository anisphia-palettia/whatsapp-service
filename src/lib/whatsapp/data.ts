import type {Client} from "whatsapp-web.js";

const clientMap = new Map<string, Client>();

export const WhatsAppClients = {
    set(sessionId: string, client: Client) {
        clientMap.set(sessionId, client);
    },

    get(sessionId: string): Client | undefined {
        return clientMap.get(sessionId);
    },

    delete(sessionId: string) {
        clientMap.delete(sessionId);
    },

    has(sessionId: string): boolean {
        return clientMap.has(sessionId);
    },

    list(): string[] {
        return Array.from(clientMap.keys());
    },

    entries(): [string, Client][] {
        return Array.from(clientMap.entries());
    }
};
