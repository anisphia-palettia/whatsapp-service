import {WhatsappSocketManage} from "@/lib/whatsapp/manage.ts";

import * as console from "node:console";

export function WhatsappSocketChat(sessionId: string) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId);
    return {
        async all() {
            const contactsArray = Object.values(WhatsappSocketManage().whatsappStore().contacts).map(c => ({
                id: c.id,
                name: c.name ?? c.notify ?? c.id
            }));
            console.log(contactsArray)

            // return contactsArray;
        }
    }
}