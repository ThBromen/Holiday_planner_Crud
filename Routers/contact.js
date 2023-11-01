
import express from "express";
import {getAllContact,getOneContact,updateContact,deleteContact,addContact} from "../Controller/contact";

const contactRouter = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - email
 *         - reply
 *       properties:
 *         email:
 *           type: string
 *           description: The  of themaile user
 *         reply:
 *           type: string
 *           description: The reply of the user
 *       example:
 *         email: umugisha@gmail.com
 *         reply: muri umugisha
 *     contactEdit:
 *       type: object
 *       required:
 *         - email
 *         - reply
 *       properties:
 *         email:
 *           type: string
 *           description: The rating of the user
 *         reply:
 *           type: string
 *           description: The ID of the user
 *       example:
 *         email: mugisha@gmail.com
 *         reply: muri umugisha
 */


/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: The contact accesibility managing API
 */

/**
 * @swagger
 * /contact/getcontact:
 *   get:
 *     summary: Returns the list of all contacts
 *     tags: [Contact]
 *     responses:
 *       200:
 *          description: The list of all contact
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Contact'
 *       204:
 *          description: No any contact in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /contact/contactbyid/{id}:
 *   get:
 *     summary: Get the contact by id
 *     tags: [Contact]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The contact id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The contact found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any contact in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The contact was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /contact/addcontact:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contact]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *          description: The contact was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Contact'
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /contact/updatecontact/{id}:
 *   put:
 *     summary: update the data of the contact by id
 *     tags: [Contact]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/contactEdit'
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The contact id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The contact was modified successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/contactEdit'
 *       204:
 *          description: No any contact in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The contact was not found
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /contact/deletecontact/{id}:
 *   delete:
 *     summary: Delete the contact by id
 *     tags: [Contact]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The contact id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The contact was deleted successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/Contact'
 *       204:
 *          description: No any contact in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The contact was not found
 *       500:
 *          description: Internal Server Error
 */



contactRouter.post("/addcontact/", addContact);
contactRouter.get("/getcontact/", getAllContact);
contactRouter.get("/contactbyid/:id",getOneContact);
contactRouter.delete("/deletecontact/:id",deleteContact);
contactRouter.put("/updatecontact/:id",updateContact);

export default contactRouter;
