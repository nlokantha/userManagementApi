import express from "express";
import type { Response, Request } from "express";
import { errorHandler } from "./middlewares/error.middleware";
import userRoutes from "./modules/user/user.routes";
import cors from "cors";
import pinoHttp from "pino-http";
import pino from "pino";

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
    },
  },
});

export const httpLogger = pinoHttp({ logger });

export const app = express();


app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    credentials: true,
  }),
);

app.use(httpLogger);

app.get("/health-check", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "I'm Okay!!!",
  });
});


app.use("/users", userRoutes);

app.use(errorHandler);
