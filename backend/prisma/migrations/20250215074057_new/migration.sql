/*
  Warnings:

  - You are about to drop the column `answer` on the `userProgress` table. All the data in the column will be lost.
  - Added the required column `attemptedanswer` to the `userProgress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correctanswer` to the `userProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userProgress" DROP COLUMN "answer",
ADD COLUMN     "attemptedanswer" TEXT NOT NULL,
ADD COLUMN     "correctanswer" TEXT NOT NULL;
