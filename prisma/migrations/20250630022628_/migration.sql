/*
  Warnings:

  - The primary key for the `WhatsappChat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `chatId` on the `WhatsappChat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `WhatsappChat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `WhatsappChat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WhatsappMessage" DROP CONSTRAINT "WhatsappMessage_chatId_fkey";

-- DropIndex
DROP INDEX "WhatsappChat_chatId_key";

-- AlterTable
ALTER TABLE "WhatsappChat" DROP CONSTRAINT "WhatsappChat_pkey",
DROP COLUMN "chatId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "WhatsappChat_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "WhatsappChat_id_key" ON "WhatsappChat"("id");

-- AddForeignKey
ALTER TABLE "WhatsappMessage" ADD CONSTRAINT "WhatsappMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "WhatsappChat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
