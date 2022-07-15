import { prisma } from "../../../database/prismaClient";


export class DeleteUserUseCase {

    async execute(id_user: string) {
        const user = await prisma.users.delete({
            where: {
                id: id_user
            }
        })

        return user
    }
}