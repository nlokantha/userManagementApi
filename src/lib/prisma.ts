import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma";
import { DATABASE_URL, NODE_ENV } from "../config/config.js";

if (!DATABASE_URL) {
	throw new Error("DATABASE_URL is required to initialize Prisma.");
}

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const adapter = new PrismaPg({ connectionString: DATABASE_URL });

export const Prisma =
	globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (NODE_ENV !== "production") {
	globalForPrisma.prisma = Prisma;
}