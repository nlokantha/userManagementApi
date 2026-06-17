import { userRepository } from "./user.repository";
import { ApiError } from "../../utils/ApiError";
import { Prisma } from "../../../generated/prisma";

type userInfo = {
  name: string;
  email: string;
};

export const userService = {
  async createUser(data: userInfo) {
    try {
      return await userRepository.create(data);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      throw new ApiError(409, "Email already exists"); // domain-specific error
    }
    throw err; // rethrow everything else as-is
    }
  },

  async getUserById(id: string) {
    const user = await userRepository.findById(id);
    if (!user) throw new ApiError(404, "User not found");
    return user;
  },

  // async getUsers(page: number, limit: number, email?: string) {
  //   const skip = (page - 1) * limit;
  //   return userRepository.findAll(skip, limit, email);
  // },

  async getUsers() {
    return userRepository.findAll();
  },

  async updateUser(id: string, data: userInfo) {
    try {
      return await userRepository.update(id, data);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
        throw new ApiError(404, "User not found"); // domain-specific error
      }
      throw err; // rethrow everything else as-is
    }
  },

  async deleteUser(id: string) {
    try {
      return await userRepository.delete(id);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
        throw new ApiError(404, "User not found"); // domain-specific error
      }
      throw err; // rethrow everything else as-is
    }
  },
};
