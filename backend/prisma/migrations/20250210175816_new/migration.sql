/*
  Warnings:

  - You are about to drop the column `image` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `signImgUrl` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN "image",
ADD COLUMN     "signImgUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "contentId";

-- AlterTable
ALTER TABLE "ExerciseResult" ALTER COLUMN "isCorrect" SET DEFAULT false;
