/*
  Warnings:

  - You are about to drop the column `userId` on the `Follower` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Following` table. All the data in the column will be lost.
  - Added the required column `followUserId` to the `Follower` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followingUserId` to the `Following` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_userId_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_userId_fkey";

-- AlterTable
ALTER TABLE "Follower" DROP COLUMN "userId",
ADD COLUMN     "followUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Following" DROP COLUMN "userId",
ADD COLUMN     "followingUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "followers" INTEGER[],
ADD COLUMN     "following" INTEGER[];
