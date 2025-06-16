import {LocalHono} from "@/types/LocalHono.ts";
import errorHandler from "@/middleware/error-handler.ts";
import r_service from "@/route/r_service.ts";

const app = new LocalHono()

app.route("/service", r_service)

app.onError(errorHandler)

export default app