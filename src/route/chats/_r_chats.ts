import {LocalHono} from "@/types/LocalHono.ts";
import c_allHandler from "@/route/chats/c_all.handler.ts";
import c_byGroupHandler from "@/route/chats/c_by-group.handler.ts";

const r_chats = new LocalHono()

r_chats.route("/all", c_allHandler)
r_chats.route("/group", c_byGroupHandler)

export default r_chats