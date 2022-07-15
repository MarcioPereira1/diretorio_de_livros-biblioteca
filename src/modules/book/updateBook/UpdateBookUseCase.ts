import { prisma } from "../../../database/prismaClient";

interface IUpdateBook {
    id: string
    name: string
}

export class UpdateBookUseCase {

    async execute({ id, name }: IUpdateBook) {
        const book = await prisma.books.update({
            where: {
                id
            },
            data: {
                name
            }
        })

        return book
    }   
}