import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneTestimony = catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await testimony.findById({ _id:requestId });

  if(!data){
    return next(new AppError("no testimony found with that ID",404));
   }
  console.log("one testimony is selected with ID:",data._id);
  res.status(200).json(data);
});