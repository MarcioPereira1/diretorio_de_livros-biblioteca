import { Request, Response } from "express";
import { UpdateBookUseCase } from "./UpdateBookUseCase";


export class UpdateBookController {

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { name } = req.body

        const updateBookUseCase = new UpdateBookUseCase()

        const result = await updateBookUseCase.execute({
            id,
            name
        })

        return res.json(result)
    }
}