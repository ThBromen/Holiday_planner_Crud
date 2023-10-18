import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import { logger } from "./Middleware";
import toursRouter  from "./Routers/tours";
import userRouter from "./Routers/users";


const port= 8000;
const app = express();

app.use(logger);
app.use(express.json());


app.use("/tours/",toursRouter);
app.use("/api/v1", userRouter);

mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

