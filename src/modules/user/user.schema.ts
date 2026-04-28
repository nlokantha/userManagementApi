import {z} from 'zod';

export const createUserSchema = z.object({
    name:z.string().min(2),
    email:z.email(), 
})

export const updateUserSchema = z.object({
    name:z.string().min(2).optional(),
    email:z.email().optional(),
})