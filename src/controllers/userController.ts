import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

import * as userService from '../services/userService.js';

export async function signUp (req: Request, res: Response) {
    const { user } = req.body;
    await userService.signUp(user);
    res.sendStatus(201);
}

export async function signIn (req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userService.signIn(email, password);
    if (!user) throw new Error('user not found');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_TOKEN!, { expiresIn: '1d' });
    
    res.status(200).send(token);
}