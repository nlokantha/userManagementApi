import { userRepository } from "./user.repository";
import { ApiError } from "../../utils/ApiError";

type userInfo = {
  name: string;
  email: string;
};

export const userService = {
  async createUser(data: userInfo) {
    return await userRepository.create(data);
  },

  async getUserById(id: string) {
    const user = await userRepository.findById(id);
    if (!user) throw new ApiError(404, "User not found");
    return user;
  },

  async getUsers(page: number, limit: number, email?: string) {
    const skip = (page - 1) * limit;
    return userRepository.findAll(skip, limit, email);
  },

  async updateUser(id: string, data: userInfo) {
    return userRepository.update(id, data);
  },

  async deleteUser(id: string) {
    return userRepository.delete(id);
  },
};
