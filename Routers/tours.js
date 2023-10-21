import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import { logger,verfyToken } from "../Middleware";
import { getAll, addTour, getOneTour, updatetour, deleteTour } from "../Controller/tours";

const toursRouter = express.Router();

   const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"tours_assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
});
 const upload = multer({dest:"tours_assets", storage:storage});
 
 toursRouter.use(verfyToken);

toursRouter.get("/gettours/", getAll);
toursRouter.post("/addtour/",upload.single("backdropimage"), addTour);
toursRouter.get("/getone/:id", getOneTour);
toursRouter.patch("/update/:id",upload.single("backdropimage"), updatetour );
toursRouter.delete("/delete/:id", deleteTour);

export default toursRouter;