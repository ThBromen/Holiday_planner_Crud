import express from "express";
import { register,login,changepassword} from "../Controller/Authentication";
import { getUser,updateUser,getById,deleteUser} from "../Controller/tours";
import { verfyToken,logger } from "../Middleware";

const userRouter = express.Router();

userRouter.post("/login/", login);
userRouter.post("/register/",logger, register);
userRouter.get("/getUser/",verfyToken, getUser);
userRouter.get("/userbyid/:id",verfyToken,getById);
userRouter.delete("/deleteuser/:id",verfyToken,deleteUser);
userRouter.put("/updateuser/:id",verfyToken,updateUser);
userRouter.post("/changepassword/:id",verfyToken,changepassword);

export default userRouter;
