"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const prisma_1 = require("../../lib/prisma");
exports.userRepository = {
    create: (data) => prisma_1.Prisma.user.create({ data }),
    findById: (id) => prisma_1.Prisma.user.findUnique({ where: { id } }),
    findAll: (skip, take, email) => prisma_1.Prisma.user.findMany({ skip, take, where: email ? { email: { contains: email } } : {} }),
    update: (id, data) => prisma_1.Prisma.user.update({ where: { id }, data }),
    delete: (id) => prisma_1.Prisma.user.delete({ where: { id } }),
};
//# sourceMappingURL=user.repository.js.map