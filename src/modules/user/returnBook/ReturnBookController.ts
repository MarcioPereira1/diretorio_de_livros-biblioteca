import { Request, Response } from "express";
import { ReturnBookUseCase } from "./ReturnBookUseCase";


export class ReturnBookController {

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const returnBookUseCase = new ReturnBookUseCase()

        const result = await returnBookUseCase.execute(id)

        return res.json(result)
    }
}