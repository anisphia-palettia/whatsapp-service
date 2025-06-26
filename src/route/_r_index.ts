import {LocalHono} from "@/types/LocalHono";
import startHandler from "@/route/start.handler";
import qrHandler from "@/route/qr.handler";
import r_message from "@/route/message/_r_message";
import groupsHandler from "@/route/groups.handler";
import r_chats from "@/route/chats/_r_chats.ts";

const r_index = new LocalHono()

r_index.route("/message", r_message)
r_index.route("/chats", r_chats)

r_index.route("/qr", qrHandler)
r_index.route("/start", startHandler)
r_index.route("/groups", groupsHandler)

export default r_index