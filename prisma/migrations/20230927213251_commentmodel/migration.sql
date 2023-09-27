/*
  Warnings:

  - You are about to drop the column `authorId` on the `Coment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coment" DROP COLUMN "authorId",
ADD COLUMN     "authorIdComent" INTEGER,
ADD COLUMN     "comentPostId" INTEGER;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "comentPostId" INTEGER;

-- AddForeignKey
ALTER TABLE "Coment" ADD CONSTRAINT "Coment_authorIdComent_fkey" FOREIGN KEY ("authorIdComent") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coment" ADD CONSTRAINT "Coment_comentPostId_fkey" FOREIGN KEY ("comentPostId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
