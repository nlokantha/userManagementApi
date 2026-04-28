"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("./user.repository");
const ApiError_1 = require("../../utils/ApiError");
exports.userService = {
    async createUser(data) {
        return await user_repository_1.userRepository.create(data);
    },
    async getUserById(id) {
        const user = await user_repository_1.userRepository.findById(id);
        if (!user)
            throw new ApiError_1.ApiError(404, "User not found");
        return user;
    },
    async getUsers(page, limit, email) {
        const skip = (page - 1) * limit;
        return user_repository_1.userRepository.findAll(skip, limit, email);
    },
    async updateUser(id, data) {
        return user_repository_1.userRepository.update(id, data);
    },
    async deleteUser(id) {
        return user_repository_1.userRepository.delete(id);
    },
};
//# sourceMappingURL=user.service.js.map