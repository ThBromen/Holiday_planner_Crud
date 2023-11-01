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
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import AppError from "./utils/appError";
import globalErrorHandler from "./Controller/Error/errorController";

const port= 8000; 

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Holiday-Planner API ",
      version: "1.0.0",
      description:
        "This is Holiday-Planner API Documentation ",
    },
    servers: [
      {
        url: "https://holiday-planner-4lew.onrender.com/",
      },
    ],
  },
  apis: ["./Routers/*.js"],
};

const specs = swaggerJSDoc(options);


const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/tours/",toursRouter);
app.use("/api/v1/", userRouter);
app.use("/booking/",bookingRouter);
app.use("/testimony/",testimonyRouter);
app.use("/contact/",contactRouter);

 app.all("*", (req,res,next) =>{
  next(new AppError (`can't find ${req.originalUrl} on this server`,404));
 });
  
 app.use(globalErrorHandler);

mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) => {
  console.log("online Database connected");
});
 

// mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
//   console.log(" local Database connected");
// });   

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

