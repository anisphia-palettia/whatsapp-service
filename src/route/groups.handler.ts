import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import {sendSuccess} from "@/utils/response-handler";
import {WhatsappSocketGroup} from "@/lib/whatsapp/group";

const groupsHandler = new LocalHono()

groupsHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const groups = await WhatsappSocketGroup(sessionId).allGroups()
        return sendSuccess(c, {
            message: `Success get groups client : ${sessionId}`,
            data: {
                groups: groups
            }
        })
    })

export default groupsHandler