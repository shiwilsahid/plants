/*
  Warnings:

  - You are about to drop the column `lastName` on the `Plant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "lastName",
ADD COLUMN     "latinName" TEXT;
