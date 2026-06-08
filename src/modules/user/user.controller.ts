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

export const deleteUser = async (req:Request, res:Response, next:NextFunction) => {  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
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

<<<<<<< HEAD
=======
export const deleteUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const result = await userService.deleteUser(req.params["id"] as string);
    res.status(200).json({
      success: result,
      message: result ? "User deleted successfully" : "User not found"
    });
  } catch (error) {
    next(error);
  }
}

export const getUsers = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const email = req.query.email as string | undefined;

    const users = await userService.getUsers(page, limit, email);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b

