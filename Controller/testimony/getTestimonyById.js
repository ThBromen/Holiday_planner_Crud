import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneTestimony = catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await testimony.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
});