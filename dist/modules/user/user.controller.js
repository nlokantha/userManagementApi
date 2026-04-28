"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res, next) => {
    try {
        const user = await user_service_1.userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map