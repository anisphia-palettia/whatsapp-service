import {LocalHono} from "@/types/LocalHono.ts";
import startHandler from "@/route/start.handler.ts";
import qrHandler from "@/route/qr.handler.ts";
import r_message from "@/route/message/_r_message.ts";
import groupsHandler from "@/route/groups.handler.ts";

const r_index = new LocalHono()

r_index.route("/message", r_message)

r_index.route("/qr", qrHandler)
r_index.route("/start", startHandler)
r_index.route("/groups", groupsHandler)

export default r_index