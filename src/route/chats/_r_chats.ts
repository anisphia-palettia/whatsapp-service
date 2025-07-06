import {LocalHono} from "@/types/LocalHono";
import c_allHandler from "@/route/chats/c_all.handler";
import c_byGroupHandler from "@/route/chats/c_by-group.handler";

const r_chats = new LocalHono()

r_chats.route("/all", c_allHandler)
r_chats.route("/group", c_byGroupHandler)

export default r_chats