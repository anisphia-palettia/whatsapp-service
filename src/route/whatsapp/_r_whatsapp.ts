import {LocalHono} from "@/types/LocalHono.ts";
import start_handler from "@/route/whatsapp/start_handler.ts";
import qr_handler from "@/route/whatsapp/qr_handler.ts";
import r_message from "@/route/whatsapp/message/_r_message.ts";

const r_whatsapp = new LocalHono()

r_whatsapp.route("/message", r_message)

r_whatsapp.route("/qr", qr_handler)
r_whatsapp.route("/start", start_handler)

export default r_whatsapp