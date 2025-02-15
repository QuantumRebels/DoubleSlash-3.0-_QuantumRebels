/*
  Warnings:

  - You are about to drop the column `signimgURL` on the `SignDictonary` table. All the data in the column will be lost.
  - Added the required column `signImageURL` to the `SignDictonary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentUrl` to the `module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SignDictonary" DROP COLUMN "signimgURL",
ADD COLUMN     "signImageURL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "module" ADD COLUMN     "contentUrl" TEXT NOT NULL;
