import {LocalHono} from "@/types/LocalHono.ts";
import sendText_handler from "@/route/whatsapp/message/send-text_handler.ts";

const r_message = new LocalHono()

r_message.route("/send", sendText_handler)

export default r_message