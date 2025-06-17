import {LocalHono} from "@/types/LocalHono.ts";
import text_handler from "@/route/whatsapp/message/text_handler.ts";

const r_message = new LocalHono()

r_message.route("/send-text", text_handler)

export default r_message