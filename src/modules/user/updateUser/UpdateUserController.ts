import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export class UpdateUserController {

    async handle(req: Request, res: Response) {
        const { id_user } = req
        const { name, username, password } = req.body

        const updateUserUseCase = new UpdateUserUseCase()

        const result = await updateUserUseCase.execute({
            id_user,
            name, 
            password, 
            username
        })

        return res.json(result)
    }
}