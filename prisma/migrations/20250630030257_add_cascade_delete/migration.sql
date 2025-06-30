-- DropForeignKey
ALTER TABLE "WhatsappMessage" DROP CONSTRAINT "WhatsappMessage_chatId_fkey";

-- AddForeignKey
ALTER TABLE "WhatsappMessage" ADD CONSTRAINT "WhatsappMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "WhatsappChat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
