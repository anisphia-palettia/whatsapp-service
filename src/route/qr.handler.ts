import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import {whatsappRedisService} from "@/service/whatsapp.redis.service.ts";
import {sendSuccess} from "@/utils/response-handler.ts";

const qrHandler = new LocalHono()

qrHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const qr = await whatsappRedisService.getQrOrThrow(sessionId)
        return sendSuccess(c, {
            message: `Success get qr client : ${sessionId}`,
            data: {
                qrCode: `https://quickchart.io/qr?text=${encodeURIComponent(qr)}`
            }
        })
    })

export default qrHandler