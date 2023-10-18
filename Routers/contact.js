
import express from "express";
import {getAllContact,getOneContact,updateContact,deleteContact,addContact} from "../Controller/contact";
import { verfyToken } from "../Middleware";

const contactRouter = express.Router();

contactRouter.post("/addcontact/", addContact);
contactRouter.get("/getcontact/", getAllContact);
contactRouter.get("/contactbyid/:id",getOneContact);
contactRouter.delete("/deletecontact/:id",verfyToken,deleteContact);
contactRouter.put("/updatecontact/:id",verfyToken,updateContact);

export default contactRouter;
