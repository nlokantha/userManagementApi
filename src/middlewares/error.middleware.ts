import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const prismaCode = (err as Error & { code?: string }).code;

    if(prismaCode === "P2002"){
        res.status(409).json({
            success:false,
            message:"Email already exists"
        });
        return;
    }

    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    res.status(statusCode).json({
        success:false,
        message:statusCode === 500 ? "Internal Server Error" : err.message
    })
}