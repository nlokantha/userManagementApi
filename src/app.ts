import express from "express";
import type { Response, Request } from "express";
import { errorHandler } from "./middlewares/error.middleware";
import userRoutes from "./modules/user/user.routes";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    credentials: true,
  }),
);

app.get("/health-check", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "I'm Okay!!!",
  });
});


app.use("/users", userRoutes);

app.use(errorHandler);
