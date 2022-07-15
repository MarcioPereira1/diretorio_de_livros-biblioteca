import { Request, Response } from "express";
import { MyBooksRentedUseCase } from "./MyBooksRentedUseCase";


export class MyBooksRentedController {
    
    async handle(req: Request, res: Response) {
        const { id_user } = req

        const myBooksRentedUseCase = new MyBooksRentedUseCase()

        const result = await myBooksRentedUseCase.execute(id_user)

        return res.json(result)
    }
}