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
    age: Joi.number().required()
});

const signinSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

const workoutSchema = Joi.object().keys({
    name: Joi.string().required(),
    blockId: Joi.number().required(),
    videoUrl: Joi.string().allow(null),
});

const programSchema = Joi.object().keys({
    name: Joi.string().required(),
    end: joi.date().format(['DD/MM/YYYY', 'DD-MM-YYYY']).required(),
});

const daySchema = Joi.object().keys({
    name: Joi.string().required(),
    day: Joi.string().required(),
    isComplete: Joi.boolean().allow(null),
    userId: Joi.number().required(),
});

const workoutDaySchema = Joi.object().keys({
    array: Joi.array().items(daySchema).required(),
});

const editWorkoutDaySchema = Joi.object().keys({
    id: Joi.number().required(),
    status: Joi.boolean().required(),
});

const blockSchema = Joi.object().keys({
    name: Joi.string().required(),
    day: joi.date().format(['DD/MM/YYYY', 'DD-MM-YYYY']).required(),
    programId: Joi.number().required(),
});

const workoutSetSchema = Joi.object().keys({
    name: Joi.string().required(),
    sets: Joi.number().required(),
    reps: Joi.number().required(),
    weight: Joi.number().required(),
    workoutId: Joi.number().required(),
});

const schemas = {
    userSchema,
    signinSchema,
    workoutSchema,
    programSchema,
    workoutDaySchema,
    editWorkoutDaySchema,
    blockSchema,
    workoutSetSchema,
};

export default schemas;