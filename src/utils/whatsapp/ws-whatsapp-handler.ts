import {WASocket} from "baileys";
import {mapBaileysChatToWhatsappChat} from "@/utils/whatsapp/transformers.ts";
import {mapBaileysMessageToWhatsappMessage} from "@/utils/whatsapp/helpers/mapBaileysMessageToWhatsappMessage.ts";

export function WsWhatsappHandler(socket: WASocket) {
    return {
        async messagingHistorySet(sessionId: string) {
            socket.ev.on("messaging-history.set", async ({chats, messages, contacts}) => {
                for (const chat of chats) {
                    console.log("==== Chat ====")
                    console.log(mapBaileysChatToWhatsappChat({chat, contacts, sessionId}))
                }
                for (const message of messages) {
                    console.log("==== messages =====")
                    console.log(mapBaileysMessageToWhatsappMessage({msg: message, sessionId}))
                }
            });
        }
    };
}
