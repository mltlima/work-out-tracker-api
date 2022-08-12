/*
  Warnings:

  - You are about to drop the column `isComplet` on the `WorkoutDay` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WorkoutDay" DROP COLUMN "isComplet",
ADD COLUMN     "isComplete" BOOLEAN NOT NULL DEFAULT false;
