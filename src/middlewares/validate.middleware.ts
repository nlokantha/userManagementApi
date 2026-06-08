import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";


export const validate = (schema:ZodSchema)=>(req:Request,res:Response,next:NextFunction)=>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log("Error in the validate")
<<<<<<< HEAD
        next("Validation Error: " + (error as Error).message)
=======
        if(error instanceof ZodError){
            res.status(422).json({
                success:false,                
                message:"Validation Error",
                errors:error.flatten().fieldErrors
             });
            return;
        }
        next(error)
>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b
    }
}