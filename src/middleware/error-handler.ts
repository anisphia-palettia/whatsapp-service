import type {Context} from "hono";
import {ZodError} from "zod";
import {HTTPException} from "hono/http-exception";
import {sendError} from "@/utils/response-handler";
import {appConfig} from "@/config/app.config";
import {
    PrismaClientInitializationError, PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientValidationError
} from "@prisma/client/runtime/library";

const isDev = appConfig.nodeEnv === "development";

export default function errorHandler(error: any, c: Context) {
    if (error instanceof ZodError) {
        return sendError(c, {
            status: 400,
            message: "Validation error",
            detail: error.errors.map((err) => ({
                path: err.path.join("."),
                message: err.message,
            })),
        });
    }

    if (error instanceof HTTPException) {
        return sendError(c, {
            status: error.status,
            message: `${error.message}` || "HTTP Error",
            ...(isDev && {stack: error.stack}),
        });
    }


    if (error instanceof PrismaClientKnownRequestError) {
        const status = error.code === 'P2002' ? 409 : 400;
        return sendError(c, {
            status,
            message: `Database error: ${error.code}`,
            detail: isDev ? error.meta : undefined,
        });
    }

    if (error instanceof PrismaClientValidationError) {
        return sendError(c, {
            status: 400,
            message: 'Invalid database input',
            detail: isDev ? error.message : undefined,
        });
    }

    if (
        error instanceof PrismaClientInitializationError ||
        error instanceof PrismaClientRustPanicError
    ) {
        return sendError(c, {
            status: 500,
            message: 'Database initialization failed',
            ...(isDev && {detail: error.message}),
        });
    }

    return sendError(c, {
        status: 500,
        message: typeof error?.message === "string" ? `${error.message}` : "Internal Server Error",
        ...(isDev && {stack: error?.stack ?? error}),
    });
}