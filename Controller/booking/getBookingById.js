import { booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneBooking= catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
});