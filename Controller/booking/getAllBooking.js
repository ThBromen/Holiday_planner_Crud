import { booking } from "../../models";

export const getAllbooking = async (req, res) => {
  let data = await booking.find();
  console.log("all bookings are selected");
  res.status(200).json({
    message:"list of bookings",
    data
  });
};