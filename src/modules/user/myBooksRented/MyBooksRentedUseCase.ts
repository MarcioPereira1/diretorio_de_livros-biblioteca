import { prisma } from "../../../database/prismaClient"

export class MyBooksRentedUseCase {

    async execute(id_user: string) {
        const books = await prisma.booksRents.findMany({
            where: {
                id_user
            }, 
            select: {
                book: true
            }
        })

        return books
    }
}