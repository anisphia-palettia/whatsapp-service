import {whatsappClientManage} from "@/lib/whatsapp/manage.ts";
import {HTTPException} from "hono/http-exception";

export function WhatsappClientGroup(sessionId: string) {
    const client = whatsappClientManage().getClientOrThrow(sessionId);

    return {
        async allGroups() {
            const chats = await client.getChats();
            const groups = chats.filter(chat => chat.isGroup);

            return groups.map(group => ({
                id: group.id._serialized,
                name: group.name,
            }));
        },

        async validateGroupAccess(groupId: string) {
            const chats = await client.getChats();
            const group = chats.find(
                (chat) => chat.isGroup && chat.id._serialized === `${groupId}@g.us`
            );

            if (!group) {
                throw new HTTPException(404, {
                    message: "Group ID not found or not accessible",
                });
            }

            return group;
        }
    }
}