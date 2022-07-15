import { prisma } from "../../../database/prismaClient";


export class GetBooksUseCase {

    async execute() {
        const books = await prisma.books.findMany()

        return books
    }
}