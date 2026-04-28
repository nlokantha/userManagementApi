"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const prisma_1 = require("../../generated/prisma");
const config_js_1 = require("../config/config.js");
if (!config_js_1.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to initialize Prisma.");
}
const globalForPrisma = globalThis;
const adapter = new adapter_pg_1.PrismaPg({ connectionString: config_js_1.DATABASE_URL });
exports.Prisma = globalForPrisma.prisma ?? new prisma_1.PrismaClient({ adapter });
if (config_js_1.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.Prisma;
}
//# sourceMappingURL=prisma.js.map