import { hash } from "bcrypt"
import { prisma } from "../../../database/prismaClient"

interface ICreateUser {
    name: string
    username: string
    password: string
}

export class CreateUserUseCase {

    async execute({ name, username, password }: ICreateUser) {
        const user = await prisma.users.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

        if(user) {
            throw new Error("User already exists.")
        }

        const hashPassword = await hash(password, 10)

        const newUser = await prisma.users.create({
            data: {
                name,
                username,
                password: hashPassword
            }
        })

        return newUser
    }
}