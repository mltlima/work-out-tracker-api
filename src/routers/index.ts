import { Router } from 'express';

import userRouter from './userRouter.js';
import workoutRouter from './workoutRouter.js';

const router = Router();

router.use(userRouter);
router.use(workoutRouter);

export default router;