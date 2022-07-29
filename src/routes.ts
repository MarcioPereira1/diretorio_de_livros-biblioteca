import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { BooksRentedController } from "./modules/book/booksRented/BooksRentedController";
import { CreateBookController } from "./modules/book/createBook/CreateBookController";
import { DeleteBookController } from "./modules/book/deleteBook/DeleteBookController";
import { GetBooksController } from "./modules/book/getBook/GetBooksController";
import { UpdateBookController } from "./modules/book/updateBook/UpdateBookController";
import { AuthenticateUserController } from "./modules/user/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { DeleteUserController } from "./modules/user/deleteUser/DeleteUserController";
import { GetUsersController } from "./modules/user/getUsers/GetUsersController";
import { MyBooksRentedController } from "./modules/user/myBooksRented/MyBooksRentedController";
import { RentBookController } from "./modules/user/rentBook/RentBookController";
import { ReturnBookController } from "./modules/user/returnBook/ReturnBookController";
import { UpdateUserController } from "./modules/user/updateUser/UpdateUserController";
import { Request, Response } from "express";

const routes = Router()

// Book
const createBookController = new CreateBookController()
const deleteBookController = new DeleteBookController()
const updateBookController = new UpdateBookController()
const getBooksController = new GetBooksController()
const booksRentedController = new BooksRentedController()

// User
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const getUsersController = new GetUsersController()
const updateUserController = new UpdateUserController()
const authenticateUserController = new AuthenticateUserController()
const rentBookController = new RentBookController()
const myBooksRentedController = new MyBooksRentedController()
const returnBookController = new ReturnBookController()

// Book
routes.post("/book", createBookController.handle)
routes.delete("/book/:id", deleteBookController.handle)
routes.put("/book/:id", updateBookController.handle)
routes.get("/books", getBooksController.handle)
routes.get("/books/rented", booksRentedController.handle)

// User
routes.post("/user", createUserController.handle)
routes.delete("/user/delete/:id", deleteUserController.handle)
routes.get("/users", getUsersController.handle)
routes.put("/user/update", ensureAuthenticated, updateUserController.handle)
routes.post("/user/authenticate", authenticateUserController.handle)
routes.put("/rent/book/:id", ensureAuthenticated, rentBookController.handle)
routes.get("/user/books", ensureAuthenticated, myBooksRentedController.handle)
routes.put("/book/return/:id", ensureAuthenticated, returnBookController.handle)

export { routes }