import {LocalHono} from "@/types/LocalHono";
import errorHandler from "@/middleware/error-handler";
import r_index from "@/route/_r_index";
import {sendError} from "@/utils/response-handler";
import {serveStatic} from "@hono/node-server/serve-static";

const app = new LocalHono()

app.use('/public/*', serveStatic({ root: './' }))

app.route("", r_index)

app.notFound((c) => {
    return sendError(c, {
        status: 404,
        message: "Not Found"
    })
});

app.onError(errorHandler)

export default app