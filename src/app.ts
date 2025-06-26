import {LocalHono} from "@/types/LocalHono";
import errorHandler from "@/middleware/error-handler";
import r_index from "@/route/_r_index";

const app = new LocalHono()

app.route("", r_index)

app.onError(errorHandler)

export default app