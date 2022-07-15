/*
  Warnings:

  - You are about to drop the column `id_user` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_id_user_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "id_user";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "id_book" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_book_fkey" FOREIGN KEY ("id_book") REFERENCES "books"("id") ON DELETE SET NULL ON UPDATE CASCADE;
