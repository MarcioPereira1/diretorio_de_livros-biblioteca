import { prisma } from "../../../database/prismaClient";


export class DeleteBookUseCase {

    async execute(id: string) {

        const book = await prisma.books.delete({
            where: {
                id
            }
        })

        const booksRents = await prisma.booksRents.deleteMany({
            where: {
                id_book: book.id
            }
        })

        return book
    }
}