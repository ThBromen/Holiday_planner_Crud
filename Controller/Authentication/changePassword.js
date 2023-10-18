import { comparePassword, hashPassword } from "../../utils";
import { User } from "../../Models";

export const changepassword = async (req,res)=>{
try{
     const {currentpassword,newpassword} = req.body;
     const  { userId }= req;
     const user = await User.findById(userId);
    let isPassword = await comparePassword(currentpassword,user.password); 
     if(!isPassword){
         return res.status(401).json({
            message:"The Current password is incorrect",
         });
     }
let hashedPassword = await  hashPassword(newpassword);
user.password = hashedPassword;
user.save();
res.status(200).json({
    message:"password changed successfully",
});

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:err.message,
        })
    }
}
