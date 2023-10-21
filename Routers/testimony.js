
import express from "express";
import {getAllTestimony,getOneTestimony,updateTestimony,deleteTestimony,addTestimony} from "../Controller/testimony";
import { verfyToken } from "../Middleware";

const testimonyRouter = express.Router();

testimonyRouter.use(verfyToken);

testimonyRouter.post("/addtestimony/", addTestimony);
testimonyRouter.get("/gettestimony/", getAllTestimony);
testimonyRouter.get("/testimonybyid/:id",getOneTestimony);
testimonyRouter.delete("/deletetestimony/:id",deleteTestimony);
testimonyRouter.put("/updatetestimony/:id",updateTestimony);

export default testimonyRouter;
