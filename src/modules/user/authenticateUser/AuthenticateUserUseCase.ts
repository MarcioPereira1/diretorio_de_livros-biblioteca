import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { prisma } from "../../../database/prismaClient"

interface IAuthenticateUser {
    username: string
    password: string
}

export class AuthenticateUserUseCase {

    async execute({ password, username }: IAuthenticateUser) {
        const user = await prisma.users.findFirst({
            where: {
                username,
            }
        })

        if(!user) {
            throw new Error("Username or Password Invalid")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Username or Password Invalid")
        }

        const token = sign({username}, "019acc25a4e242bb55ad489832ada12d", {
            subject: user.id,
            expiresIn: "1d",
        })

        return token
    }
}