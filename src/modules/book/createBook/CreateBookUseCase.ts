import { prisma } from '../../../database/prismaClient'

interface ICreateBook {
    name: string
}

export class CreateBookUseCase {

    async execute({ name }: ICreateBook) {
        const book = await prisma.books.create({
            data: {
                name
            }
        })

        return book
    }
}