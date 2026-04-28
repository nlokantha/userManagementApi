"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const user_schema_1 = require("./user.schema");
const router = (0, express_1.Router)();
router.post("/", (0, validate_middleware_1.validate)(user_schema_1.createUserSchema), user_controller_1.createUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map