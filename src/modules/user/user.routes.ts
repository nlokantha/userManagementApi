import { Router } from "express";
import { createUser } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";


 const router = Router();


router.post("/", validate(createUserSchema), createUser);



export default router;