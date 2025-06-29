import {SessionStatus} from "@generated/index";

export interface IWhatsappGroupInfo {
    id: string;
    name: string;
}

export interface IWhatsappSessionUpdate {
    status?: SessionStatus;
    lastConnectedAt?: Date;
}

export interface IWhatsappChatCreate {
    chatId: string;
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
    senderId?: string;
    messageType?: string;
    text?: string;
    caption?: string;
    mediaPath?: string;
    timestamp: bigint;
}