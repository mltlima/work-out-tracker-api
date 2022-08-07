import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'joi';

import { wrongSchemaError } from '../utils/errorUtils.js';

export function validateSchema(schema: AnySchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) throw wrongSchemaError(error.message);
        
        next();
    }
}