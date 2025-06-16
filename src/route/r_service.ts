import {LocalHono} from "@/types/LocalHono.ts";
import r_whatsapp from "@/route/whatsapp/_r_whatsapp.ts";

const r_service = new LocalHono()

r_service.route("/whatsapp", r_whatsapp)

export default r_service