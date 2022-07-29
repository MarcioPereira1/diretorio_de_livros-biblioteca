/*
  Warnings:

  - You are about to drop the column `id_book` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_book_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "id_book";

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
