import {LocalHono} from "@/types/LocalHono.ts";
import {withSessionId} from "@/middleware/with-sessionid.ts";
import validate from "@/middleware/validate.ts";
import {whatsappMessageSchema, type WhatsAppMessageWithImageInput} from "@/schema/whatsapp-message-schema.ts";

const withImage_handler = new LocalHono()

withImage_handler.post("",
    withSessionId(),
    validate("form", whatsappMessageSchema.withImage),
    async (c) => {
        const sessionId = c.get("sessionId")
        const {image, recipient, caption} = c.req.valid("form") as WhatsAppMessageWithImageInput

    }
)

export default withImage_handler