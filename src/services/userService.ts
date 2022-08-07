import bcrypt from 'bcrypt';

import * as userRepository from '../repositories/userRepository.js';
import { conflictError, notFoundError, unauthorizedError } from '../utils/errorUtils.js';

export async function signUp(user: userRepository.User) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    user.age = Number(user.age);
    user.height = Number(user.height);
    user.weight = Number(user.weight);

    const response = await userRepository.getUserByEmail(user.email);
    if (response) throw conflictError("user already exists");

    await userRepository.createUser(user);
}

export async function signIn(email: string, password: string): Promise<userRepository.ReturnUser | null> {
    const user = await userRepository.getUserByEmail(email);
    if (!user) throw notFoundError("user not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw unauthorizedError("invalid password");

    return user;
}