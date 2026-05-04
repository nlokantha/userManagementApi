import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";


export const validate = (schema:ZodSchema)=>(req:Request,res:Response,next:NextFunction)=>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log("Error in the validate")
        if(error instanceof ZodError){
            res.status(422).json({
                success:false,                
                message:"Validation Error",
                errors:error.flatten().fieldErrors
             });
            return;
        }
        next(error)
    }
}