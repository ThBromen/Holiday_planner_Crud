import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const addTestimony = catchAsync(async (req, res) => {

  await testimony.create(req.body);
      console.log("testimony is created successfully");
      
  res.status(201).json({
    message: "testimony is created successfully",
  });
});