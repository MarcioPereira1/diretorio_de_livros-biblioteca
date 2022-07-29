import { Request, Response } from "express";
import { GetBooksUseCase } from "./GetBooksUseCase";


export class GetBooksController {

    async handle(req: Request, res: Response) {

        const getBooksUseCase = new GetBooksUseCase() 

        const result = await getBooksUseCase.execute()

        return res.json(result)
    }
}