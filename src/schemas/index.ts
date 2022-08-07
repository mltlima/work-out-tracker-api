import Joi from 'joi';
import date from '@joi/date'
const joi = Joi.extend(date);

const userSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    age: Joi.number().min(0).required()
});

const signinSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
});

const schemas = {
    userSchema,
    signinSchema,
    
};

export default schemas;