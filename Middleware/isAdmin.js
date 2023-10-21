import { User } from "../models";

 export const isAdmin= async (req,res,next)=>{
try{
 const {userId} = req;
 const user= await User.findById(userId);

  if( user?.role !="Admin"){
    res.status(403).json({
        message:'Action is  Only for Admin',
  });
  }
  next();
  
}catch(err){
    console.log(err);
    res.stats(500).json({
        message:"inernal saver error",
    });
}

 }