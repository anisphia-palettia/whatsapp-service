import {SessionStatus} from "@generated/prisma";

export interface IWhatsappGroupInfo {
    id: string;
    name: string;
}

export interface IWhatsappSessionUpdate {
    status?: SessionStatus;
    lastConnectedAt?: Date;
}

export interface IWhatsappChatCreate {
    sessionId: string;
    name: string;
    isGroup: boolean;
    unreadCount?: number;
}

export interface IWhatsappChatUpdate {
    unreadCount?: number;
    name?: string;
}

export interface IWhatsappMessageCreate {
    sessionId: string;
    chatId: string;
    messageId: string;
    fromMe: boolean;
    senderId?: string | null;
    messageType?: string | null;
    text?: string | null;
    mediaPath?: string | null;
    timestamp: string;
}