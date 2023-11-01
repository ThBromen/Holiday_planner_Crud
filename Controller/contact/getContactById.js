import { contact } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneContact = catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
});