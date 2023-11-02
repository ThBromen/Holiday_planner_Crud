import { booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deletebooking = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  if(!data){
    return next(new AppError("no contact found with that ID",404));
   }
   
  const result = await booking.deleteMany(data);
  console.log("one booking  is deleted with ID:",data._id );
  res.send(result);
} );