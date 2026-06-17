import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import logger from "../../lib/logger";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    logger.info("User created successfully");
    res.status(201).json(user);
  } catch (err) {
    logger.error("Error creating user", err);
    next(err);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getUserById(req.params["id"] as string);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getUsers( parseInt(req.query.page as string) || 1, parseInt(req.query.limit as string) || 10, req.query.email as string);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.updateUser(req.params["id"] as string, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
