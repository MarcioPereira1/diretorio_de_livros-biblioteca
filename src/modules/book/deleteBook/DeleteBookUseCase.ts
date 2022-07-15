import { prisma } from "../../../database/prismaClient";


export class DeleteBookUseCase {

    async execute(id_book: string) {
        const book = await prisma.books.delete({
            where: {
                id: id_book
            }
        })

        return book
    }
}