import { prisma } from "../../lib/prisma";
import type { Prisma as PrismaTypes } from "../../../generated/prisma";

export const userRepository = {
  create: (data: PrismaTypes.UserCreateInput) => prisma.user.create({ data }),

  findById: (id: string) => prisma.user.findUnique({ where: { id } }),

//   findAll: (skip: number, take: number, email?: string) =>
//     prisma.user.findMany({
//       skip,
//       take,
//       where: email ? { email: { contains: email } } : {},
//     }),

    findAll:()=> prisma.user.findMany(),

<<<<<<< HEAD
  update: (id: string, data: PrismaTypes.UserUpdateInput) =>
    prisma.user.update({ where: { id }, data }),

  delete: (id: string) => prisma.user.delete({ where: { id } }),
};
=======
    delete:(id:string)=>prisma.user.delete({where:{id}}),

    findByEmail:(email:string)=>prisma.user.findFirst({where:{email}})
}
>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b
