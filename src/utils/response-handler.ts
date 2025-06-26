import type {Context} from "hono";
import type {ContentfulStatusCode} from "hono/utils/http-status";
import {appConfig} from "@/config/app.config";

type ApiResponseSuccess<T = any> = {
    success: boolean;
    data?: T;
    message: string;
    statusCode?: ContentfulStatusCode
    token?: string;
};

type ApiResponseError = {
    success: boolean;
    statusCode?: ContentfulStatusCode,
    error: {
        message: string;
        details?: any;
        stack?: string;
    };
};

export function sendSuccess<T = any>(
    c: Context,
    {
        message,
        status = 200,
        data,
        token,
    }: {
        message: string;
        status?: ContentfulStatusCode;
        data?: T;
        token?: string;
    }
) {
    return c.json<ApiResponseSuccess>(
        {
            success: true,
            statusCode: status,
            message: `[WHATSAPP SERVICE] ${message}`,
            data: data,
            token: token,
        },
        status
    );
}

export function sendError(
    c: Context,
    {
        message,
        detail,
        stack,
        status,
    }: {
        message: string;
        detail?: any;
        stack?: string;
        status: ContentfulStatusCode;
    }
) {
    return c.json<ApiResponseError>(
        {
            success: false,
            statusCode: status,
            error: {
                message: message,
                details: detail,
                ...(appConfig.nodeEnv !== "production" ? {stack} : {}),
            },
        },
        status
    );
}