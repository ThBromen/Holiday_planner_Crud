import { tours } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getAll = catchAsync(async (req, res) => {
  let data = await tours.find();
  console.log("all tours are selected");
  res.status(200).json({
    message:"list of tours",
    data
  });
});