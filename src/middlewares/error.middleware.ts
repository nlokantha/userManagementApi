import type { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // ── Prisma known errors ──────────────────────────────────────────
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaErrorMap: Record<string, { status: number; message: string }> = {
      P2002: { status: 409, message: "A record with that value already exists" },
      P2025: { status: 404, message: "Record not found" },
      P2003: { status: 400, message: "Invalid reference: related record not found" },
      P2014: { status: 400, message: "Relation violation" },
    };

    const mapped = prismaErrorMap[err.code];
    if (mapped) {
      res.status(mapped.status).json({ success: false, message: mapped.message });
      return;
    }
  }

  // ── Prisma validation errors (bad types/missing required fields) ──
  if (err instanceof Prisma.PrismaClientValidationError) {
    res.status(400).json({ success: false, message: "Invalid data provided" });
    return;
  }

  // ── Known operational errors ─────────────────────────────────────
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  // ── Unexpected errors ─────────────────────────────────────────────
  console.error("[Unhandled Error]", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
};