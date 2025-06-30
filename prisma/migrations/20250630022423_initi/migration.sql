/*
  Warnings:

  - The primary key for the `WhatsappChat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `WhatsappChat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WhatsappChat" DROP CONSTRAINT "WhatsappChat_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "WhatsappChat_pkey" PRIMARY KEY ("chatId");
