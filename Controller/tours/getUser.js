import { User } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getUser = catchAsync(async (req, res) => {
  let data = await User.find();
  console.log("list of users is selected !!");

  res.status(200).json({
    message:"list of users !!",
    data
  });
});