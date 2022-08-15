import prisma from '../database.js';

export interface Workout {
    name: string;
    blockId: number;
    videoUrl: string | null;
    userId: number;
    sets: number;
    reps: number;
}

export interface Program {
    name: string;
    authorId: number;
    end: string;
}

export interface WorkoutDay {
    name: string;
    day: string;
    isComplete: boolean | null;
    userId: number;
}

interface ReturnWorkoutDay extends WorkoutDay {
    id: number;
}

export interface Block {
    name: string;
    day: string;
    programId: number;
}

export interface WorkoutSet {
    name: string;
    sets: number;
    reps: number;
    weight: number;
    workoutId: number;
}

export async function createWorkout(workout: Workout){
    return await prisma.workout.create({
        data: workout,
    });
}


export async function getUserProgramId(userId: number){
    return await prisma.user.findFirst({where: {id: userId},
    });
}


//----------------------------------------------------------------------------------------------------------------------

export async function getWorkoutById(id: number) {
    return await prisma.workout.findFirst({
        where: { id },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getWorkoutByName(name: string) {
    return await prisma.workout.findMany({
        where: { name },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getAllWorkouts() {
    return await prisma.workout.findMany();
}

//----------------------------------------------------------------------------------------------------------------------

export async function createProgram(program: Program) {
    return await prisma.program.create({
        data: program,
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getProgramByName(name: string) {
    return await prisma.program.findMany({
        where: { name },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function createWorkoutDay(workouts: Array<WorkoutDay>) {
    return await prisma.workoutDay.createMany({
        data: workouts,
        skipDuplicates: true,
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getWorkoutDayById(id: number): Promise<ReturnWorkoutDay> {
    return await prisma.workoutDay.findFirst({
        where: { id },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function editWorkoutDay(id: number, status: boolean) {
    return await prisma.workoutDay.update({
        where: {
            id: id,
        },
        data: {
            isComplete: status,
        },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getProgramById(id: number) {
    return await prisma.program.findFirst({
        where: { id },
        include: {
            Block: {
                include: {
                    Workout: {}
                }
            }
        }    
    });
}

//----------------------------------------------------------------------------------------------------------------------

//getprogram groupby block
export async function getProgramGroupByBlock(programId: number) {
    return await prisma.program.findMany({
        where: { id: programId },
        include: {
            Block: {
                include: {
                    Workout: {
                }
            }
        }
    }
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function getAllPrograms() {
    return await prisma.program.findMany({
        include: {
            Block: {
                include: {
                    Workout: {
                    }
                }
            }   
        }
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function addProgramToUser(programId: number, userId: number) {
    return await prisma.user.update({
        where: { id: userId },
        data: {
            programId: programId,
        },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function deleteProgram(id: number) {
    await prisma.program.delete({
        where: {
            id,
        },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function deleteWorkout(id: number) {
    return await prisma.workout.delete({
        where: {
            id,
        },
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function createBlock(block: any) {
    return await prisma.block.create({
        data: block,
    });
}

//----------------------------------------------------------------------------------------------------------------------

export async function createWorkoutSet(workoutSet: WorkoutSet) {
    return await prisma.workoutSet.create({
        data: workoutSet,
    });
}