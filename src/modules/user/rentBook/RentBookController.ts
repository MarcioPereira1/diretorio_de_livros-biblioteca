import { Request, Response } from "express";
import { RentBookUseCase } from "./RentBookUseCase";


export class RentBookController {

    async handle(req: Request, res: Response) {
        const { id_user } = req
        const { id } = req.params

        const rentBookUseCase = new RentBookUseCase()

        const result = await rentBookUseCase.execute({
            id_user,
            id
        })

        return res.json(result)
    }
}