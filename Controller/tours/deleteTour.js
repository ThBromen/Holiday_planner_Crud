import { tours } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteTour = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await tours.findById({ _id:requestId });
  
  if(!data){
    return next(new AppError("no tour found with that ID",404));
   }

  const result = await tours.deleteMany(data);
  console.log("the tour is deleted with ID:",data._id);
  res.send(result);
} );