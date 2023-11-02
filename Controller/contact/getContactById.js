import { contact } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneContact = catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });

  if(!data){
    return next(new AppError("no contact found with that ID",404));
   }
  

  console.log("one contact is selected with ID:",data._id);
  res.status(200).json(data);
});