

import * as workoutRepository from '../repositories/workoutRepository.js';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils.js';

export async function createWorkout(workout: workoutRepository.Workout) {
    const response = await workoutRepository.getWorkoutByName(workout.name);
    if (response) throw conflictError("workout already exists");

    await workoutRepository.createWorkout(workout);
}

export async function getWorkoutById(id: number) {
    const response = await workoutRepository.getWorkoutById(id);
    if (!response) throw notFoundError("workout not found");

    return response;
}

export async function getWorkouts() {
    const response = await workoutRepository.getAllWorkouts();
    return response;
}

export async function createProgram(program: workoutRepository.Program) {
    const response = await workoutRepository.getProgramByName(program.name, program.authorId);
    if (response) throw conflictError("program already exists");

    await workoutRepository.createProgram(program);
}

export async function createWorkoutDay(workouts: Array<workoutRepository.WorkoutDay>) {
    await workoutRepository.createWorkoutDay(workouts);
}

export async function editWorkoutDay(id: number, status: boolean, userId: number) {
    const workoutDay = await workoutRepository.getWorkoutDayById(id);
    if (!workoutDay) throw notFoundError("workout day not found");
    if (workoutDay.userId !== userId) throw unauthorizedError("you are not authorized to edit this workout day");

    await workoutRepository.editWorkoutDay(id, status);
}

export async function getUserProgram(userId: number) {
    return await workoutRepository.getProgramGroupByBlock(userId);
}

export async function deleteProgram(id: number, userId: number) {
    const program = await workoutRepository.getProgramById(id);
    if (!program) throw notFoundError("program not found");
    if (program.authorId !== userId) throw unauthorizedError("you are not authorized to delete this program");

    await workoutRepository.deleteProgram(id);
}

export async function deleteWorkout(id: number, userId: number) {
    const workout = await workoutRepository.getWorkoutById(id);
    if (!workout) throw notFoundError("workout not found");
    if (workout.userId !== userId) throw unauthorizedError("you are not authorized to delete this workout");

    await workoutRepository.deleteWorkout(id);
}

export async function createBlock(block: workoutRepository.Block) {
    await workoutRepository.createBlock(block);
}

export async function createWorkoutSet(workoutSet: workoutRepository.WorkoutSet) {
    await workoutRepository.createWorkoutSet(workoutSet);
}