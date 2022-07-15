import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";


export class CreateBookController {

    async handle(req: Request, res: Response) {
        const { name } = req.body

        const createBookUseCase = new CreateBookUseCase()

        const result = await createBookUseCase.execute({
            name
        })

        return res.json(result)
    }
}