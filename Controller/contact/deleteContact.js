import { contact } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteContact = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });
  if(!data){
    return next(new AppError("no contact found with that ID",404));
   }
  console.log("one contact is deleted with ID:",data._id );
  const result = await contact.deleteMany(data);
  res.send(result);
}); 