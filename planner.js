import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import { logger } from "./Middleware";
import cors from "cors";
import toursRouter  from "./Routers/tours";
import userRouter from "./Routers/users";
import bookingRouter from "./Routers/booking";
import testimonyRouter from "./Routers/testimony";
import contactRouter from "./Routers/contact";

const port= 8000;
const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());


app.use("/tours",toursRouter);
app.use("/api/v1", userRouter);
app.use("/booking",bookingRouter);
app.use("/testimony",testimonyRouter);
app.use("/contact",contactRouter);

mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) => {
  console.log("online Database connected");
});


// mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
//   console.log(" local Database connected");
// });


app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

