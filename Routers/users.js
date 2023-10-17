import express from "express";
import { register,login,changepassword} from "../Controller/Authentication";
import { getUser,updateUser,getById,deleteUser} from "../Controller/tours";
import{ logger } from "../Middleware";

const userRouter = express.Router();

userRouter.post("/login/", login);
userRouter.post("/signup/", register); 
userRouter.post("/changepassword/", changepassword);
userRouter.get("/getUser/", getUser);
userRouter.get("/userbyid/:id",getById);
userRouter.delete("/deleteuser/:id",deleteUser);
userRouter.put("/updateuser/:id",updateUser);
export default userRouter;

