import { WhatsappSocketManage } from "@/lib/whatsapp/manage";
import { HTTPException } from "hono/http-exception";
import { whatsappGroupRedisService } from "@/service/redis/whatsapp-group-redis.service";
import type { IWhatsappGroupInfo } from "@/types/IWhatsapp";
import type { WASocket } from "baileys";

export function WhatsappSocketGroup(sessionId: string) {
    const socket = WhatsappSocketManage().getSocketOrThrow(sessionId) as WASocket;

    const formatGroupId = (groupId: string): string =>
        groupId.endsWith("@g.us") ? groupId : `${groupId}@g.us`;

    const fetchGroups = async (): Promise<IWhatsappGroupInfo[]> => {
        const groupsMetadata = await socket.groupFetchAllParticipating();
        const groups = Object.values(groupsMetadata).map((group) => ({
            id: group.id,
            name: group.subject,
        }));

        await whatsappGroupRedisService.set(sessionId, groups);
        return groups;
    };

    const findGroupInList = (groups: IWhatsappGroupInfo[], groupId: string) =>
        groups.find((g) => g.id === groupId);

    return {
        async allGroups(): Promise<IWhatsappGroupInfo[]> {
            return fetchGroups();
        },

        async validateGroupAccess(groupId: string): Promise<void> {
            const formattedId = formatGroupId(groupId);

            let groups = await whatsappGroupRedisService.get(sessionId);
            let group = findGroupInList(groups ?? [], formattedId);

            if (!group) {
                groups = await fetchGroups();
                group = findGroupInList(groups, formattedId);
            }

            if (!group) {
                throw new HTTPException(404, {
                    message: "Group ID not found or not accessible by this socket",
                });
            }
        },
    };
}
