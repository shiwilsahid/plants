/*
  Warnings:

  - You are about to drop the `Specific` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "family" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Specific";
