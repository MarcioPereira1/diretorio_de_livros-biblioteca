import { prisma } from "../../../database/prismaClient";


export class MyBooksRentedUseCase {

    async execute(id_user: string) {
        const books = await prisma.users.findUnique({
            where: {
                id: id_user,
            }, 
            select: {
                id: true,
                name: true,
                username: true,
                book: true
            }
        })

        return books
    }
}