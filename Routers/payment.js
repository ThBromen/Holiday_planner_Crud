import express from "express";
import { cashIn, cashOut, transaction } from "../Controller/payment/paymentController";
const paymentRouter = express.Router();
 
/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Paypack API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CashInRequest:
 *       type: object
 *       properties:
 *         number:
 *           type: string
 *         amount:
 *           type: number
 *       example:
 *         number: "0784020043"
 *         amount: 1000
 */

/**
 * @swagger
 * /payment/cashin:
 *   post:
 *     summary: Cash In
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CashInRequest'
 *     responses:
 *       '201':
 *         description: Successful cash in
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /payment/cashout:
 *   post:
 *     summary: Cash Out
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CashInRequest'
 *     responses:
 *       '201':
 *         description: Successful cash out
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /payment/transaction:
 *   get:
 *     summary: Get Transactions
 *     tags: [Payment]
 *     responses:
 *       '200':
 *         description: Successful transaction retrieval
 *         content:
 *           application/json:
 *             example:
 *               data: [transaction1, transaction2]
 *       '500':
 *         description: Internal server error
 */

paymentRouter.post("/cashin/", cashIn);
paymentRouter.post("/cashout/", cashOut);
paymentRouter.get("/transaction/", transaction);

export default paymentRouter;