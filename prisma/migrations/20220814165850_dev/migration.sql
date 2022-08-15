/*
  Warnings:

  - Changed the type of `day` on the `Block` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "daysWeek" AS ENUM ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

-- AlterTable
ALTER TABLE "Block" DROP COLUMN "day",
ADD COLUMN     "day" "daysWeek" NOT NULL;
