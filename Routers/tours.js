import express from "express";
const toursRouter = express.Router();
import {logger} from "../Middleware";
import { getAll, addTour, getOneTour, updatetour, deleteTour } from "../Controller/tours";
 
toursRouter.get("/gettours/", getAll);
toursRouter.post("/addtour/", addTour);
toursRouter.get("/:id", getOneTour);
toursRouter.patch("/:id", updatetour );
toursRouter.delete("/:id", deleteTour);
export default toursRouter;