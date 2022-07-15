-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_id_user_fkey";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "id_user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
