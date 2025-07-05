-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('CONNECTED', 'DISCONNECTED');

-- CreateTable
CREATE TABLE "whatsapp_session" (
    "id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "status" "SessionStatus" NOT NULL DEFAULT 'DISCONNECTED',
    "last_connected_at" TIMESTAMP(3),
    "callback_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "whatsapp_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whatsapp_chat" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_group" BOOLEAN NOT NULL,
    "unread_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "whatsapp_chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whatsapp_message" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "message_id" TEXT NOT NULL,
    "from_me" BOOLEAN NOT NULL,
    "sender_id" TEXT,
    "message_type" TEXT,
    "text" TEXT,
    "caption" TEXT,
    "media_path" TEXT,
    "timestamp" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "whatsapp_message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "whatsapp_session_phone_number_key" ON "whatsapp_session"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "whatsapp_chat_id_key" ON "whatsapp_chat"("id");

-- CreateIndex
CREATE UNIQUE INDEX "whatsapp_message_message_id_key" ON "whatsapp_message"("message_id");

-- AddForeignKey
ALTER TABLE "whatsapp_chat" ADD CONSTRAINT "whatsapp_chat_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "whatsapp_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "whatsapp_message" ADD CONSTRAINT "whatsapp_message_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "whatsapp_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "whatsapp_message" ADD CONSTRAINT "whatsapp_message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "whatsapp_chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
