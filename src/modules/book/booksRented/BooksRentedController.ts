import { Request, Response } from "express";
import { BooksRentedUseCase } from "./BooksRentedUseCase";


export class BooksRentedController {

    async handle(req: Request, res: Response) {

        const booksRentedUseCase = new BooksRentedUseCase() 

        const result = await booksRentedUseCase.execute()

        return res.json(result)
    }
}