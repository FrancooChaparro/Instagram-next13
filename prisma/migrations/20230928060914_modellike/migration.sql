/*
  Warnings:

  - You are about to drop the `Follower` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Following` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Follower";

-- DropTable
DROP TABLE "Following";

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "authorIdLike" INTEGER,
    "PostIdLike" INTEGER,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_authorIdLike_fkey" FOREIGN KEY ("authorIdLike") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_PostIdLike_fkey" FOREIGN KEY ("PostIdLike") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
