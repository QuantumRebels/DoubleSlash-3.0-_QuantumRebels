/*
  Warnings:

  - You are about to drop the column `contentUrl` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `contentUrl` on the `module` table. All the data in the column will be lost.
  - Added the required column `signImgUrl` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "contentUrl",
DROP COLUMN "description",
ADD COLUMN     "signImgUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "module" DROP COLUMN "contentUrl";
