import { Router } from "express";
import { createUser, getUserById } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";


 const router = Router();


router.post("/", validate(createUserSchema), createUser);
router.get("/:id", getUserById);



export default router;