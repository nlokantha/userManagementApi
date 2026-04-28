import { Prisma } from "../../lib/prisma";
import type { Prisma as PrismaTypes } from "../../../generated/prisma";


export const userRepository = {
    create:(data:PrismaTypes.UserCreateInput)=>Prisma.user.create({data}),

    findById:(id:string)=>Prisma.user.findUnique({where:{id}}),

    findAll:(skip:number,take:number,email?:string)=>Prisma.user.findMany({skip,take,where:email? {email:{contains:email}} : {}}),

    update:(id:string,data:PrismaTypes.UserUpdateInput)=>Prisma.user.update({where:{id},data}),

    delete:(id:string)=>Prisma.user.delete({where:{id}}),
}