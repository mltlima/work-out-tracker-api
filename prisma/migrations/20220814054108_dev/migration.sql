-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_blockId_fkey";

-- AlterTable
ALTER TABLE "Workout" ALTER COLUMN "blockId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Block"("id") ON DELETE SET NULL ON UPDATE CASCADE;
