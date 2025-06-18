import Redis from "ioredis";
import {appConfig} from "@/config/config.ts";

export const redis = new Redis({
    host: appConfig.redisHost,
    port: Number(appConfig.redisPort),
});