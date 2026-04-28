"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.PORT = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./.env"
});
exports.NODE_ENV = process.env.NODE_ENV;
exports.PORT = process.env.PORT;
exports.DATABASE_URL = process.env.DATABASE_URL;
//# sourceMappingURL=config.js.map