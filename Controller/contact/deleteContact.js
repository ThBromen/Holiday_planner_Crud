import { contact } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteContact = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });
  console.log(data);
  const result = await contact.deleteMany(data);
  res.send(result);
}); 