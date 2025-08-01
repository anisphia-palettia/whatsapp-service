import pino from "pino";
import path from "path";
import fs from "fs";
import {appConfig} from "@/config/app.config";
import dayjs from "dayjs";

const pathLog = path.join(process.cwd(), "logs", "app.log")
fs.mkdirSync(path.dirname(pathLog), {recursive: true})

export const logger = appConfig.nodeEnv === "production"
    ? pino({
        transport: {
            target: "pino/file",
            options: {
                destination: pathLog,
                mkdir: true,
            },
        },
        timestamp: () => `,"time":"${dayjs().format('DD-MM-YYYY HH:mm:ss')}"`,
    })
    : pino({
        level: 'debug',
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname",
            },
        },
        timestamp: () => `,"time":"${dayjs().format('DD-MM-YYYY HH:mm:ss')}"`,
    });
