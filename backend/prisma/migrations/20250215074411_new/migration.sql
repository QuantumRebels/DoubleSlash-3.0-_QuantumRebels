/*
  Warnings:

  - Added the required column `timetaken` to the `userProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userProgress" ADD COLUMN     "timetaken" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "modulecompletion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "moduleCompletion" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "modulecompletion_pkey" PRIMARY KEY ("id")
);
