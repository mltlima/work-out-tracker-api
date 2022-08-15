import { Request, Response } from 'express';

import * as workoutService from '../services/workoutService.js';
import * as workoutRepository from '../repositories/workoutRepository.js';


export async function getWorkoutById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await workoutRepository.getWorkoutById(Number(id));

    res.status(200).json({response});
}

export async function getWorkouts(req: Request, res: Response) {
    const response = await workoutRepository.getAllWorkouts();

    res.status(200).json({response});
}

export async function getUserProgram(req: Request, res: Response) {
    const { user } = JSON.parse(JSON.stringify(res.locals));
    const response = await workoutService.getUserProgram(user.user.id);

    res.status(200).json({response});
}

export async function getAllPrograms(req: Request, res: Response) {
    const response = await workoutService.getAllPrograms();

    res.status(200).json(response);
}

export async function addProgramToUser(req: Request, res: Response) {
    const { user } = JSON.parse(JSON.stringify(res.locals));
    const { programId } = req.body;

    await workoutService.addProgramToUser(Number(programId), Number(user.user.id));

    res.sendStatus(200);
}


/*  Depricated functions
export async function deleteProgram(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = JSON.parse(JSON.stringify(res.locals));

    await workoutService.deleteProgram(Number(id), user.user.id);
    res.sendStatus(200);
}

export async function deleteWorkout(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = JSON.parse(JSON.stringify(res.locals));

    await workoutService.deleteWorkout(Number(id), user.user.id);
    res.sendStatus(200);
}
export async function createWorkout(req: Request, res: Response) {
    const { name, blockId, videoUrl } = req.body;
    const { user } = JSON.parse(JSON.stringify(res.locals));

    const workout = { name, blockId, videoUrl, userId: user.user.id };
    await workoutService.createWorkout(workout);
    res.sendStatus(201);
}
export async function createBlock(req: Request, res: Response) {
    const { name, day, programId } = req.body;

    const block = { name, day, programId };
    await workoutService.createBlock(block);
    res.sendStatus(201);
}
export async function createProgram(req: Request, res: Response) {
    const { name, end } = req.body;
    const { user } = JSON.parse(JSON.stringify(res.locals));

    const program = { name, authorId: user.user.id, end };
    await workoutService.createProgram(program);
    res.sendStatus(201);
}

export async function createWorkoutDay(req: Request, res: Response) {
    const { array } = req.body;

    await workoutService.createWorkoutDay(array);
    res.sendStatus(201);
}

export async function editWorkoutDay(req: Request, res: Response) {
    const { id, status } = req.body;
    const { user } = JSON.parse(JSON.stringify(res.locals));

    await workoutService.editWorkoutDay(Number(id), status, user.user.id);
    res.sendStatus(200);
}
*/