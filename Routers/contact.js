
import express from "express";
import {getAllContact,getOneContact,updateContact,deleteContact,addContact} from "../Controller/contact";
import { verfyToken } from "../Middleware";

const contactRouter = express.Router();

contactRouter.use(verfyToken);

contactRouter.post("/addcontact/", addContact);
contactRouter.get("/getcontact/", getAllContact);
contactRouter.get("/contactbyid/:id",getOneContact);
contactRouter.delete("/deletecontact/:id",deleteContact);
contactRouter.put("/updatecontact/:id",updateContact);

export default contactRouter;
