import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const getAllTestimony = catchAsync(async (req, res) => {
  let data = await testimony.find();
  console.log("all testimony are selected");
  res.status(200).json({
    message:"list of testimony",
    data
  });
});