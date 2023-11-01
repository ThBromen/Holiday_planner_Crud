
import { User } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const deleteUser= catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await User.findById({ _id:requestId });
  console.log(data);
  const result = await User.deleteMany(data);
  res.send(result);
    
   
} );