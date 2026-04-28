import type { Prisma as PrismaTypes } from "../../../generated/prisma";
export declare const userRepository: {
    create: (data: PrismaTypes.UserCreateInput) => PrismaTypes.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }, never, import("../../../generated/prisma/runtime/client").DefaultArgs, PrismaTypes.PrismaClientOptions>;
    findById: (id: string) => PrismaTypes.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    } | null, null, import("../../../generated/prisma/runtime/client").DefaultArgs, PrismaTypes.PrismaClientOptions>;
    findAll: (skip: number, take: number, email?: string) => PrismaTypes.PrismaPromise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }[]>;
    update: (id: string, data: PrismaTypes.UserUpdateInput) => PrismaTypes.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }, never, import("../../../generated/prisma/runtime/client").DefaultArgs, PrismaTypes.PrismaClientOptions>;
    delete: (id: string) => PrismaTypes.Prisma__UserClient<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }, never, import("../../../generated/prisma/runtime/client").DefaultArgs, PrismaTypes.PrismaClientOptions>;
};
//# sourceMappingURL=user.repository.d.ts.map