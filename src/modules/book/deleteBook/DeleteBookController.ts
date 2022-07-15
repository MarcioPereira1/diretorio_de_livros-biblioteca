import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";


export class DeleteBookController {

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const deleteBookUseCase = new DeleteBookUseCase()

        const result = await deleteBookUseCase.execute(id)

        return res.json(result)
    }
}