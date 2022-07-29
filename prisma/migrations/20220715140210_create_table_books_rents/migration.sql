/*
  Warnings:

  - You are about to drop the column `id_user` on the `books` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_id_user_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "id_user";

-- CreateTable
CREATE TABLE "books_rents" (
    "id" TEXT NOT NULL,
    "id_book" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_rents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books_rents" ADD CONSTRAINT "books_rents_id_book_fkey" FOREIGN KEY ("id_book") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_rents" ADD CONSTRAINT "books_rents_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
