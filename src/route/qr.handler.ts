import {LocalHono} from "@/types/LocalHono";
import {withSessionId} from "@/middleware/with-sessionid";
import {whatsappQrRedisService} from "@/service/redis/whatsapp-qr-redis.service";
import {sendSuccess} from "@/utils/response-handler";

const qrHandler = new LocalHono()

qrHandler.get("",
    withSessionId(),
    async (c) => {
        const sessionId = c.get("sessionId")
        const qr = await whatsappQrRedisService.getQrOrThrow(sessionId)
        return sendSuccess(c, {
            message: `Success get qr client : ${sessionId}`,
            data: {
                qrCode: `https://quickchart.io/qr?text=${encodeURIComponent(qr)}`
            }
        })
    })

export default qrHandler