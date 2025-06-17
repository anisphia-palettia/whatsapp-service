import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {sendSuccess} from "@/utils/response-handler.ts";
import {WhatsappClientGroup} from "@/lib/whatsapp/group.ts";

const groupsHandler = new LocalHono()

groupsHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const groups = await WhatsappClientGroup(sessionId).allGroups()
        return sendSuccess(c, {
            message: `Success get groups client : ${sessionId}`,
            data: {
                groups: groups
            }
        })
    })

export default groupsHandler