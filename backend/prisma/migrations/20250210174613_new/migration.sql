/*
  Warnings:

  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Lesson";

-- CreateTable
CREATE TABLE "lesson" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contentUrl" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);
