import { tours } from "../../models";
import AppError from "../../utils/appError";
import { catchAsync } from "../Error/catchAsync";

export const getOneTour= catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await tours.findById({ _id:requestId });
  
   if(!data){
    return next(new AppError("no tour found with that ID",404));
   }
   console.log("the tour is selected with ID:",data._id);
  res.status(200).json(data);
});