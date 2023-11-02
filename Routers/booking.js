import express from "express";
import {getAllbooking,getOneBooking,updatebooking,deletebooking,addbooking} from "../Controller/booking";

import { verfyToken } from "../Middleware";

const bookingRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - tourID
 *         - userID
 *         - isPayed
 *         - paymentMethod 
 *         - whoBooked
 *         - tourBooked
 *         - paymentMethod

 *       properties:
 *         tourID:
 *           type: string
 *           description: The ID of the Tour
 *         userID:
 *           type: string
 *           description: The ID of the user
 *         isPayed:
 *           type: string
 *           description: The verification of payment
 *         paymentMethod:
 *           type: string
 *           description: The method you used to pay
 *         whoBooked:
 *           type: string
 *           description: the user who books the tour
 *         tourBooked:
 *           type: string
 *           description: the tour which is booked
 *         date:
 *           type: string
 *           description: the date the tour was booked
 *         status:
 *           type: string
 *           description: if tour if approved or pending
 *         numberOfTour:
 *           type: string
 *           description: the number of tours
 *       example:
 *         tourID: 324edchfyjhg
 *         userID: 098978675tghj
 *         isPayed: Yes
 *         paymentMethod: MOMO
 *         whoBooked: Muyango
 *         tourBookend: vocation
 *         date: 1/2/2087
 *         numberOfTicket: 67
 *     bookingEdit:
 *       type: object
 *       required:
 *         - tourID
 *         - userID
 *         - isPayed
 *         - paymentMethod
 *       properties:
 *         tourID:
 *           type: string
 *           description: The ID of the Tour
 *         userID:
 *           type: string
 *           description: The ID of the user
 *         isPayed:
 *           type: string
 *           description: The verification of payment
 *         paymentMethod:
 *           type: string
 *           description: The method you used to pay
 *         whoBooked:
 *           type: string
 *           description: the user who books the tour
 *         tourBooked:
 *           type: string
 *           description: the tour which is booked
 *         date:
 *           type: string
 *           description: the date the tour was booked
 *         status:
 *           type: string
 *           description: if tour if approved or pending
 *         numberOfTour:
 *           type: string
 *           description: the number of tours
 *       example:
 *         tourID: 324edchfyjhg
 *         userID: 098978675tghj
 *         isPayed: Yes
 *         paymentMethod: MOMO 
 *         whoBooked: Muyango
 *         tourBookend: vocation
 *         date: 1/2/2087
 *         numberOfTicket: 67
 *         ststus: pending
 */


/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: The booking accesibility managing API
 */

/**
 * @swagger
 * /booking/getbooking:
 *   get:
 *     summary: Returns the list of all bookings
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *          description: The list of all bookings 
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Booking'
 *       204:
 *          description: No any booking in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /booking/bookingbyid/{id}:
 *   get:
 *     summary: Get the booking by id
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The booking id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The booking found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any booking in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The boooking was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /booking/addbooking:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *          description: The booking was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Booking'
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /booking/updatebooking/{id}:
 *   put:
 *     summary: update the data of the booking by id
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/bookingEdit'
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The booking id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The booking was modified successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/bookingEdit'
 *       204:
 *          description: No any booking in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The booking was not found
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /booking/deletebooking/{id}:
 *   delete:
 *     summary: Delete the booking by id
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The booking id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The booking was deleted successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Booking'
 *       204:
 *          description: No any booking in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The booking was not found
 *       500:
 *          description: Internal Server Error
 */

// bookingRouter.use(verfyToken);

bookingRouter.post("/addbooking/", addbooking);
bookingRouter.get("/getbooking/", getAllbooking);
bookingRouter.get("/bookingbyid/:id",getOneBooking);
bookingRouter.delete("/deletebooking/:id",deletebooking);
bookingRouter.put("/updatebooking/:id",updatebooking);

export default bookingRouter;
