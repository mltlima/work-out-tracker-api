import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_TOKEN;

  if (!token) throw unauthorizedError("invalid token");

  const user = jwt.verify(token, secretKey!);
  if (!user) throw notFoundError("user not found");

  res.locals.user = user;
  next();
  
}