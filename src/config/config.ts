export const appConfig = {
    port: Number(Bun.env.APP_PORT) || 3000,
    nodeEnv: Bun.env.NODE_ENV || "production",
    qrCodeGeneratorKey: Bun.env.QR_CODE_GENERATOR_KEY || "",
};
