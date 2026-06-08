import { Router } from "express";
<<<<<<< HEAD
import { createUser, getAllUsers, getUserById } from "./user.controller";
=======
import { createUser, getUserById,updateUser,deleteUser,getUsers } from "./user.controller";
>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema } from "./user.schema";


 const router = Router();


router.post("/", validate(createUserSchema), createUser);
router.get("/:id", getUserById);
<<<<<<< HEAD
router.get("/",getAllUsers)
=======
router.put("/:id", validate(createUserSchema), updateUser);
router.delete("/:id", deleteUser);
router.get("/", getUsers);
>>>>>>> 1d20cab9a434a66945ad0a729d0eaa224930a64b



export default router;