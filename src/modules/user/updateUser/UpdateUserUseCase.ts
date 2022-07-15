import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IUpdateUser {
    id_user: string
    name?: string
    username?: string
    password?: string
}

export class UpdateUserUseCase {

    async execute({ id_user, name, password, username }: IUpdateUser) {
        const newUser = await prisma.users.update({
            where: {
                id: id_user
            },
            data: {
                name,
                username,
                password
            }
        })

        const hashPassword = await hash(newUser.password, 10)

        const user = await prisma.users.update({
            where: {
                id: id_user
            },
            data: {
                password: hashPassword
            }
        })

        return user
    }
}