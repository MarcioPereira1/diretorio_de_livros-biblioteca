import { prisma } from "../../../database/prismaClient";


export class GetUsersUseCase {

    async execute() {
        const users = await prisma.users.findMany({
            select: {
                id: true,
                name: true,
                username: true,
                created_at: true
            }
        })

        return users
    }
}