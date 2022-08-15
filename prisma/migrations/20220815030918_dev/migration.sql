/*
  Warnings:

  - You are about to drop the column `authorId` on the `Program` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_authorId_fkey";

-- DropIndex
DROP INDEX "Program_name_authorId_key";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "authorId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "programId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;
