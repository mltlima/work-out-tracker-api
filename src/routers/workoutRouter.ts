import { Router } from "express";

import * as workoutController from "../controllers/workoutController.js";
import schemas from "../schemas/index.js";
import { validateSchema } from "../middlewares/schemasMiddleware.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const workoutRouter = Router();

workoutRouter.use(validateToken);

workoutRouter.post("/workout", validateSchema(schemas.workoutSchema), workoutController.createWorkout);
workoutRouter.post("/program", validateSchema(schemas.programSchema), workoutController.createProgram);
workoutRouter.post("/workoutDay", validateSchema(schemas.workoutDaySchema), workoutController.createWorkoutDay);
workoutRouter.post("/block", validateSchema(schemas.blockSchema), workoutController.createBlock);
workoutRouter.post("/workoutSet", validateSchema(schemas.workoutSetSchema), workoutController.createWorkoutSet);
workoutRouter.patch("/workoutDay", validateSchema(schemas.editWorkoutDaySchema), workoutController.editWorkoutDay);
workoutRouter.get("/userProgram", workoutController.getUserProgram);
workoutRouter.get("/workout/:id", workoutController.getWorkoutById);
workoutRouter.get("/workouts", workoutController.getWorkouts);
workoutRouter.delete("/program/:id", workoutController.deleteProgram);
workoutRouter.delete("/workout/:id", workoutController.deleteWorkout);