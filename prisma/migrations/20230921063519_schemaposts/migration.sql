/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "liked" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Following" TEXT,
ADD COLUMN     "followers" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "pasword" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "username" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Coment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "Coment_pkey" PRIMARY KEY ("id")
);
