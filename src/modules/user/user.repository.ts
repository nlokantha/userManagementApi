import { prisma } from "../../lib/prisma";
import type { Prisma as PrismaTypes } from "../../../generated/prisma";


export const userRepository = {
    create:(data:PrismaTypes.UserCreateInput)=>prisma.user.create({data}),

    findById:(id:string)=>prisma.user.findUnique({where:{id}}),

    findAll:(skip:number,take:number,email?:string)=>prisma.user.findMany({skip,take,where:email? {email:{contains:email}} : {}}),

    update:(id:string,data:PrismaTypes.UserUpdateInput)=>prisma.user.update({where:{id},data}),

    delete:(id:string)=>prisma.user.delete({where:{id}}),

    findByEmail:(email:string)=>prisma.user.findFirst({where:{email}})
}