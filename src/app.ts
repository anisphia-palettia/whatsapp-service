import {LocalHono} from "@/types/LocalHono";
import errorHandler from "@/middleware/error-handler";
import r_index from "@/route/_r_index";
import {sendError} from "@/utils/response-handler.ts";

const app = new LocalHono()

app.route("", r_index)

app.notFound((c) => {
    return sendError(c, {
        status: 404,
        message: "Not Found"
    })
});

app.onError(errorHandler)

export default app