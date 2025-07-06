export const appConfig = {
    appPort: Number(process.env.APP_PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "production",
    redisHost: process.env.REDIS_HOST || "localhost",
    redisPort: process.env.REDIS_PORT || "3000",
    databaseUrl: process.env.DATABASE_URL || ""
};
