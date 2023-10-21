import express from "express";
import {getAllbooking,getOneBooking,updatebooking,deletebooking,addbooking} from "../Controller/booking";

import { verfyToken } from "../Middleware";

const bookingRouter = express.Router();

bookingRouter.use(verfyToken);

bookingRouter.post("/addbooking/", addbooking);
bookingRouter.get("/getbooking/", getAllbooking);
bookingRouter.get("/bookingbyid/:id",getOneBooking);
bookingRouter.delete("/deletebooking/:id",deletebooking);
bookingRouter.put("/updatebooking/:id",updatebooking);

export default bookingRouter;
