import express from 'express';
import type {Response,Request} from "express"
import { errorHandler } from './middlewares/error.middleware';
import userRoutes from './modules/user/user.routes';

export const app = express();

app.get('/healt-check', (req:Request, res:Response) => {
    res.send({
        success:true,
        message:"I'm Okay!!!"
    })
});

app.use(express.json());
app.use("/users", userRoutes);
app.use(errorHandler);