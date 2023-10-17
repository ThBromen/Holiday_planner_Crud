import express from "express";
import multer from "multer";
const toursRouter = express.Router();
import {logger} from "../Middleware";
import { getAll, addTour, getOneTour, updatetour, deleteTour } from "../Controller/tours";


   const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"tours_assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
});
const upload = multer({dest:"tours_assets", storage:storage});

toursRouter.get("/gettours/", getAll);
toursRouter.post("/addtour/",upload.single("backdropimage"), addTour);
toursRouter.get("/:id", getOneTour);
toursRouter.patch("/:id",upload.single("backdropimage"), updatetour );
toursRouter.delete("/:id", deleteTour);
export default toursRouter;