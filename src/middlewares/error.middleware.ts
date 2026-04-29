import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    // console.error(err);
    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    res.status(statusCode).json({
        success:false,
        message:err.message || "Internal Server Error"
    })
}