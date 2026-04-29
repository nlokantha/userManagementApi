import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";


export const createUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const user = await userService.getUserById(req.params["id"] as string);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


export const updateUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = await userService.updateUser(req.params["id"] as string, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

