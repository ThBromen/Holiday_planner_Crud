import express from "express";
import { register,login,changepassword} from "../Controller/Authentication";
import { getUser,updateUser,getById,deleteUser} from "../Controller/tours";
import { verfyToken } from "../Middleware";

const userRouter = express.Router();

userRouter.post("/login/", login);
userRouter.post("/register/", register); 
userRouter.get("/getUser/", getUser);
userRouter.get("/userbyid/:id",getById);
userRouter.post("/changepassword/",verfyToken,changepassword);
userRouter.delete("/deleteuser/:id",verfyToken,deleteUser);
userRouter.put("/updateuser/:id",verfyToken,updateUser);

export default userRouter;

