import prisma from '../database.js';

export interface User {
    name: string;
    email: string;
    password: string;
    height: number;
    weight: number;
    age: number;
}

export interface ReturnUser extends User {
    id: number;
}

export async function getUserByEmail(email: string): Promise<ReturnUser | null> {
    return prisma.user.findFirst({
        where: { email },
    });
}

export async function getUserById(id: number): Promise<ReturnUser | null> {
    return prisma.user.findFirst({
        where: { id },
    });
}

export async function createUser(user: User): Promise<ReturnUser> {
    return prisma.user.create({
        data: user,
    });
}