import {LocalHono} from "@/types/LocalHono";
import m_textHandler from "@/route/message/m_text.handler";
import m_withImageHandler from "@/route/message/m_with-image.handler";
import m_broadcastHandler from "@/route/message/m_broadcast.handler";
import m_broadcastWithImageHandler from "@/route/message/m_broadcast-with-image.handler";

const r_message = new LocalHono()

r_message.route("/text", m_textHandler)
r_message.route("/with-image", m_withImageHandler)
r_message.route("/broadcast", m_broadcastHandler)
r_message.route("/broadcast-with-image", m_broadcastWithImageHandler)

export default r_message