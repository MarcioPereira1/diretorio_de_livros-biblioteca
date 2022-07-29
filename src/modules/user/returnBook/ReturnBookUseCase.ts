import { prisma } from "../../../database/prismaClient";


export class ReturnBookUseCase {

    async execute(id: string) {
        const updateBook = await prisma.books.update({
            where: {
                id
            },
            data: {
                rented: false
            }
        })
        
        const book = await prisma.booksRents.deleteMany({
            where: {
                id_book: updateBook.id 
            }
        })

        return updateBook
    }
}