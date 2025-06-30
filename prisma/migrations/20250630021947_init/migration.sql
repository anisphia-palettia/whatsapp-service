/*
  Warnings:

  - A unique constraint covering the columns `[messageId]` on the table `WhatsappMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WhatsappMessage_messageId_key" ON "WhatsappMessage"("messageId");
