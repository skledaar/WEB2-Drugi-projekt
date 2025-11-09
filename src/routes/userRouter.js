import { Router } from "express";
import { getBySurname } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", getBySurname);

export default userRouter;