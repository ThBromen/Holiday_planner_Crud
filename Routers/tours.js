import express from "express";
import multer from "multer";
import { verfyToken,isAdmin } from "../Middleware";
import { getAll, addTour, getOneTour, updatetour, deleteTour } from "../Controller/tours";

const toursRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     AddTour:
 *       type: object
 *       required:
 *         - destination
 *         - backdropimage
 *         - title
 *         - gallery
 *       properties:
 *         destination:
 *           type: string
 *           description: Tour destination
 *         backdropimage:
 *           type: string
 *           format: binary
 *           description: The Back Drop Image 
 *         title:
 *           type: string
 *           description: The tour title
 *         description:
 *           type: string
 *           description: The tour description
 *         duration:
 *           type: string
 *           description: The tour duration
 *         groupsize:
 *           type: string
 *           description: the group size of tour participant
 *         price:
 *           type: string
 *           description: The tour price
 *         discount:
 *           type: string
 *           description: The amount of discount on tour
 *         departure:
 *           type: string
 *           description: The tour departure
 *         seats:
 *           type: string
 *           description: The tour seats
 *         frommonth:
 *           type: string
 *           description: The month you will start tour
 *         tomonth:
 *           type: string
 *           description: The month you will end tour
 *         departuretime:
 *           type: string
 *           description: The time it will take
 *         returntime:
 *           type: string
 *           description: The time you will return from tour
 *         priceincluded:
 *           type: string
 *           description: The all amount to be paid
 *         gallery:
 *           type: array
 *           items:
 *             type: string
 *             format: binary
 *           description: The gallery of visited tour
 *         pricenotincluded:
 *           type: string
 *           description: The deduction price/ discount amount
 *         tourtype:
 *           type: string
 *           description: The tour type
 *       example:
 *         destination: Kigali-Kampala
 *         backdropimage: img.png
 *         title: vacation
 *         description: Return from dependence
 *         duration: 2-Month  
 *         groupsize: 10
 *         price: 500$
 *         discount: 10%
 *         departure: 1st/January
 *         seats: 5
 *         frommonth: January
 *         tomonth: May
 *         departuretime: 3 Month
 *         returntime: 5th/May
 *         priceincluded: 450$
 *         gallery: img.jpg
 *         pricenotincluded: 50$
 *         tourtype: vacancy
 */

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Tours accessibility managing API
 */

/**
 * @swagger
 * /tours/gettours:
 *   get:
 *     summary: Returns the list of all the tours 
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *          description: The list of all tours
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/AddTour'
 *       204:
 *          description: No any tour in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */



/**
 * @swagger
 * /tours/getone/{id}:
 *   get:
 *     summary: Get the tour by id
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The tour id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The tour found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any tour in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The user was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /tours/addtour:
 *   post:
 *     summary: Create a new tour
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/AddTour'
 *     responses:
 *       201:
 *          description: The tour was successfully created
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/AddTour'
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /tours/update/{id}:
 *   patch:
 *     summary: update the data of the tour by id
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/AddTour'
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The tour id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The tour was modified successfully
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/AddTour'
 *       204:
 *          description: No any tour in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The tour was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /tours/delete/{id}:
 *   delete:
 *     summary: Delete the tour by id
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The tour id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The tour was deleted successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/addTour'
 *       204:
 *          description: No any tour in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The tour was not found
 *       500:
 *          description: Internal Server Error
 */

   const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"tours_assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
});
 const upload = multer({dest:"tours_assets", storage:storage});
 
 const  tourimgupload = upload.fields([
    {name: "backdropimage", maxCount: 1},
    {name: "gallery", maxCount: 15}
 ]);


toursRouter.use(verfyToken);
// toursRouter.use(isAdmin);

toursRouter.get("/gettours/", getAll);
toursRouter.post("/addtour/",tourimgupload, addTour);
toursRouter.get("/getone/:id", getOneTour);
toursRouter.patch("/update/:id",tourimgupload, updatetour );
toursRouter.delete("/delete/:id", deleteTour);

export default toursRouter;