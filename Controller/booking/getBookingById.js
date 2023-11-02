import { booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneBooking= catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  if(!data){
    return next(new AppError("no contact found with that ID",404));
   }
   console.log("one booking is selected  with ID:",data._id );
  res.status(200).json(data);
});