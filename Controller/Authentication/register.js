import {User} from "../../models";
import { Express } from "express";
import nodemailer from "nodemailer";

import {generateToken,hashPassword} from "../../utils";
export const register = async (req,res) =>{
    try {
    const user = await User.findOne({ email: req.body.email });
    if(user){
       return res.status(409).json({
            message:"user of this email already exisite",
        });
    };
    const hashedPassword =await  hashPassword(req.body.password);
    req.body.password = hashedPassword;
    console.log("after hasshing password", req.body);

    const newUser = await User.create(req.body);
    console.log("new user", newUser);

       let token = generateToken({
        id :"newUser.id",
    });

 res.status(200).json({
    message:" user registered successfully",
    access_token : token,
    user:{
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
        role: newUser.role,
    }
 });


//  const testAccount = await nodemailer.createTestAccount();

//  const transporter = nodemailer.createTransport({
//    host: "smtp.ethereal.email",
//    port: 8000,
//    secure: false,
//    auth: {
//      user: testAccount.user,
//      pass: testAccount.pass,
//    }
//  });
//   let message = {
//    from: '"Fred Foo"<foo@example.com>',
//    to: "mugi@gmail.com",
//    subject: "successfull registerd",
//    text: " you have successfully registered",
//    html: "<b>you have successfully registered<b>",
//   };

//  transporter.sendMail(message).then(() => {
//   return res.status(201).json({
//     message:"you should receive email"}) 
//   }).catch(error =>{
//   return res.status(500).json({error})
// });

} catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}