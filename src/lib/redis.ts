import Redis from "ioredis";
import {appConfig} from "@/config/app.config";

export const redis = new Redis({
    host: appConfig.redisHost,
    port: Number(appConfig.redisPort),
});