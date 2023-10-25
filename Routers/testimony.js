
import express from "express";
import {getAllTestimony,getOneTestimony,updateTestimony,deleteTestimony,addTestimony} from "../Controller/testimony";
import { verfyToken } from "../Middleware";

const testimonyRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Testimony:
 *       type: object
 *       required:
 *         - rating
 *         - userID
 *         - body
 *       properties:
 *         rating:
 *           type: string
 *           description: The rating of the user
 *         userID:
 *           type: string
 *           description: The ID of the user
 *         body:
 *           type: string
 *           description: The  rating body
 *       example:
 *         rating: muri umugisha
 *         userID: 098978675tghj
 *         body: yesu akwishimire
 *     testimonyEdit:
 *       type: object
 *       required:
 *         - rating
 *         - userID
 *         - body
 *       properties:
 *         rating:
 *           type: string
 *           description: The rating of the user
 *         userID:
 *           type: string
 *           description: The ID of the user
 *         body:
 *           type: string
 *           description: The  rating body
 *       example:
 *         rating: muri umugisha
 *         userID: 098978675tghj
 *         body: yesu akwishimire
 */


/**
 * @swagger
 * tags:
 *   name: Testimony
 *   description: The Testimony accesibility managing API
 */

/**
 * @swagger
 * /testimony/gettestimony:
 *   get:
 *     summary: Returns the list of all testimony
 *     tags: [Testimony]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *          description: The list of all testimony 
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Testimony'
 *       204:
 *          description: No any testimony in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /testimony/testimonybyid/{id}:
 *   get:
 *     summary: Get the testimony by id
 *     tags: [Testimony]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The testimony id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The testimony found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any testimony in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The testimony was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /testimony/addtestimony:
 *   post:
 *     summary: Create a new testimony
 *     tags: [Testimony]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Testimony'
 *     responses:
 *       201:
 *          description: The testimony was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Testimony'
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /testimony/updatetestimony/{id}:
 *   put:
 *     summary: update the data of the testimony by id
 *     tags: [Testimony]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/testimonyEdit'
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The testimony id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The testimony was modified successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/testimonyEdit'
 *       204:
 *          description: No any testimony in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The testimony was not found
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /testimony/deletetestimony/{id}:
 *   delete:
 *     summary: Delete the testimony by id
 *     tags: [Testimony]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The testimony id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The testimony was deleted successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Testimony'
 *       204:
 *          description: No any testimony in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The testimony was not found
 *       500:
 *          description: Internal Server Error
 */




testimonyRouter.use(verfyToken);

testimonyRouter.post("/addtestimony/", addTestimony);
testimonyRouter.get("/gettestimony/", getAllTestimony);
testimonyRouter.get("/testimonybyid/:id",getOneTestimony);
testimonyRouter.delete("/deletetestimony/:id",deleteTestimony);
testimonyRouter.put("/updatetestimony/:id",updateTestimony);

export default testimonyRouter;
