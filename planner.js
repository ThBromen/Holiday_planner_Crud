import express from "express";
import "dotenv/config";
const port= 8000;
const app = express();
import {logger} from "./middleware";
app.use(logger);
app.use(express.json());
let router = express.Router();

import toursRouter from "./routers/tours.js";
import userRouter from "./routers/users.js";
import mongoose from "mongoose";

app.use("/tours/",toursRouter);
app.use("/api/v1", userRouter);

mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

