import {LocalHono} from "@/types/LocalHono.ts";
import c_allHandler from "@/route/chats/c_all.handler.ts";

const r_chats = new LocalHono()

r_chats.route("/all", c_allHandler)

export default r_chats