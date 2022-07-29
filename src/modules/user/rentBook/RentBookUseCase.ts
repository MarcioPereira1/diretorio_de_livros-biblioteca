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

        const updateBook = await prisma.books.update({
            where: {
                id
            },
            data: {
                rented: true
            }
        })

        const bookRent = await prisma.booksRents.create({
            data: {
                id_user,
                id_book: book.id
            },
        })

        return bookRent
    }
}