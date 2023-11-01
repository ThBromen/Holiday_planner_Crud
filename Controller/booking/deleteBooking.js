import { booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deletebooking = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  console.log(data);
  const result = await booking.deleteMany(data);
  res.send(result);
} );