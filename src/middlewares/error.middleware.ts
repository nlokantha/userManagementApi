import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
<<<<<<< HEAD
=======
    const prismaCode = (err as Error & { code?: string }).code;

    if(prismaCode === "P2002"){
        res.status(409).json({
            success:false,
            message:"Email already exists"
        });
        return;
    }

>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b
    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    res.status(statusCode).json({
        success:false,
        message:statusCode === 500 ? "Internal Server Error" : err.message
    })
}