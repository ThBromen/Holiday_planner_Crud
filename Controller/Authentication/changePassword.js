import { comparePassword, hashPassword } from "../../utils";
import { User } from "../../Models";

export const changepassword = async (req,res)=>{
try{

     const {email,currentpassword,newpassword}= req.body;
     const user = await User.findOne({email});
      let isPassword= await comparePassword(currentpassword,user.password); 

     if(!isPassword){
         return res.status(401).jsom({
            message:"The Current password is incorrect",
         });
     }
let hashedPassword = await  hashPassword(currentpassword);
user.password = hashedPassword;
user.save();

    }catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
}