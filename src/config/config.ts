export const appConfig = {
    port: Number(Bun.env.APP_PORT) || 3000,
    nodeEnv: Bun.env.NODE_ENV || "production",
};
