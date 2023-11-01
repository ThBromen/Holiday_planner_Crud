import { catchAsync } from "../Controller/Error/catchAsync";
import { User } from "../models";

 export const isAdmin= catchAsync(async (req,res,next)=>{
 const {userId} = req;
 const user= await User.findById(userId);

  if( user?.role !="admin"){
    res.status(403).json({
        message:'Action is  Only for Admin',
  });
  }
  next();
  


 });