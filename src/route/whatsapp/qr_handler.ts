import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {whatsappRedisService} from "@/service/whatsapp.redis.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const qr_handler = new LocalHono()

qr_handler.get("", withSessionId(), async (c) => {
    const sessionId = c.get("sessionId")
    const qr = await whatsappRedisService.getQrOrThrow(sessionId)
    return sendSuccess(c, {
        message: `Success get qr client : ${sessionId}`,
        data: {
            qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`
        }
    })
})

export default qr_handler