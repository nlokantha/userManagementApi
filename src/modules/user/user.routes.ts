import { Router } from "express";
import { createUser, getUserById,updateUser,deleteUser,getUsers } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";


 const router = Router();


router.post("/", validate(createUserSchema), createUser);
router.get("/:id", getUserById);
router.put("/:id", validate(createUserSchema), updateUser);
router.delete("/:id", deleteUser);
router.get("/", getUsers);



export default router;