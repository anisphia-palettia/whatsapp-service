import {WASocket} from "baileys";
import {mapBaileysChatToModel} from "@/utils/whatsapp/transformers.ts";

export function WsWhatsappHandler(socket: WASocket) {
    return {
        async messagingHistorySet() {
            socket.ev.on("messaging-history.set", ({chats, messages, contacts}) => {
                console.log(mapBaileysChatToModel(chats, contacts));
            })
        }
    }
}