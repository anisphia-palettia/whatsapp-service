import {LocalHono} from "@/types/LocalHono.ts";
import errorHandler from "@/middleware/error-handler.ts";
import r_index from "@/route/_r_index.ts";

const app = new LocalHono()

app.route("", r_index)

app.onError(errorHandler)

export default app