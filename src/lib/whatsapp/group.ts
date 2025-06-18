import {WhatsappClientManage} from "@/lib/whatsapp/manage.ts";
import {HTTPException} from "hono/http-exception";
import {whatsappGroupRedisService} from "@/service/whatsapp-group-redis.service.ts";
import type {IWhatsappGroupInfo} from "@/types/Whatsapp.ts";

export function WhatsappClientGroup(sessionId: string) {
    const client = WhatsappClientManage().getClientOrThrow(sessionId);

    function formatGroupId(groupId: string): string {
        return groupId.endsWith("@g.us") ? groupId : `${groupId}@g.us`;
    }

    async function fetchGroupsFromClient(): Promise<IWhatsappGroupInfo[]> {
        const chats = await client.getChats()
        const groups = chats
            .filter(chat => chat.isGroup)
            .map(group => ({
                id: group.id._serialized,
                name: group.name,
            }));
        await whatsappGroupRedisService.set(sessionId, groups);
        return groups
    }

    return {
        async allGroups() {
            return await fetchGroupsFromClient();
        },

        async validateGroupAccess(groupId: string) {
            const formattedId = formatGroupId(groupId);

            let groups: IWhatsappGroupInfo[] = await whatsappGroupRedisService.get(sessionId);

            let group = groups?.find(g => g.id === formattedId);

            if (!group) {
                groups = await fetchGroupsFromClient();
                group = groups.find(g => g.id === formattedId);
            }

            if (!group) {
                throw new HTTPException(404, {
                    message: "Group ID not found or not accessible by this client",
                });
            }
        }
    }
}