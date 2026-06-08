import { Router } from "express";
import {  getAllUsers, } from "./user.controller";
import { createUser, getUserById,updateUser,deleteUser} from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";


 const router = Router();


router.post("/", validate(createUserSchema), createUser);
router.get("/:id", getUserById);
router.get("/",getAllUsers)
router.put("/:id", validate(createUserSchema), updateUser);
router.delete("/:id", deleteUser);
router.get("/", getAllUsers);



export default router;