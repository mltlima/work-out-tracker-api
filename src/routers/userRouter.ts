import { Router } from "express";

import * as userController from "../controllers/userController.js";
import schemas from "../schemas/index.js";
import { validateSchema } from "../middlewares/schemasMiddleware.js";

const userRouter = Router();

userRouter.post("/signup", validateSchema(schemas.userSchema), userController.signUp);
userRouter.post("/signin", validateSchema(schemas.signinSchema), userController.signIn);

export default userRouter;