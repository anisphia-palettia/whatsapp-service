export const appConfig = {
    port: Number(Bun.env.APP_PORT) || 3000,
    nodeEnv: Bun.env.NODE_ENV || "production",
    redisHost: Bun.env.REDIS_HOST || "localhost",
    redisPort: Bun.env.REDIS_PORT || "3000",
};
