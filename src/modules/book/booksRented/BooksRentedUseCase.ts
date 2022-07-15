import { prisma } from "../../../database/prismaClient";


export class BooksRentedUseCase {
    
    async execute() {
        const books = await prisma.books.findMany({
            where: {
                rented: true
            }
        })

        return books
    }
}