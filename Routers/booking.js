import express from "express";
import {getAllbooking,getOneBooking,updatebooking,deletebooking,addbooking} from "../Controller/booking";
import { verfyToken } from "../Middleware";

const bookingRouter = express.Router();

bookingRouter.post("/addbooking/", addbooking);
bookingRouter.get("/getbooking/", getAllbooking);
bookingRouter.get("/bookingbyid/:id",getOneBooking);
bookingRouter.delete("/deletebooking/:id",verfyToken,deletebooking);
bookingRouter.put("/updatebooking/:id",verfyToken,updatebooking);

export default bookingRouter;
