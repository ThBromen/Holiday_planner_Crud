import { booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getAllbooking = catchAsync(async (req, res) => {
  let data = await booking.find();
  console.log("all bookings are selected");
  res.status(200).json({
    message:"list of bookings",
    data
  });
});