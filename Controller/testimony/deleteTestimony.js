import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteTestimony = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await testimony.findById({ _id:requestId });
 
  if(!data){
    return next(new AppError("no testimony found with that ID",404));
   }

  const result = await testimony.deleteMany(data);
  console.log("one testimony is deleted with ID:", data._id)
  res.send(result);
});