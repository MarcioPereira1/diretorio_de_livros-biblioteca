import { prisma } from "../../../database/prismaClient";

interface IRentBook {
    id_user: string
    id: string
}

export class RentBookUseCase {

    async execute({ id_user, id }: IRentBook) {
        const book = await prisma.books.findUnique({
            where: {
                id
            }
        })

        if(!book) {
            throw new Error("This book not exists.")
        }

        if(book.rented === true) {
            throw new Error("Book already rented")
        }

        const statusBook = await prisma.books.update({
            where: {
                id: book.id
            },
            data: {
                rented: true,
                id_user
            },
            select: {
                id: true,
                name: true,
                rented: true,
                created_at: true,             
            }
        })

        return statusBook
    }
}