import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

import * as userService from '../services/userService.js';

export async function signUp (req: Request, res: Response) {
    const { name, email, password, height, weight, age } = req.body;
    const user = { name, email, password, height, weight, age };
    await userService.signUp(user);
    res.sendStatus(201);
}

export async function signIn (req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userService.signIn(email, password);
    if (!user) throw new Error('user not found');
    
    delete user.password;
    const token = jwt.sign({ user }, process.env.JWT_TOKEN!, { expiresIn: '1d' });
    
    res.status(200).json({token});
}