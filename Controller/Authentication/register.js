import {User} from "../../models";
import {generateToken,hashPassword,transporter} from "../../utils";

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

    const newUser = await User.create(req.body);

    console.log("new user was created successfully");

       let token = generateToken({
        id :"newUser.id",
    });


const mailOptions = {
  from: process.env.EMAIL_USER,
  to: newUser.email,
  subject: 'Welcome to Our Platform',
  text: `Hello ${newUser.fullNames} !!     Thank you for registering on HOLIYDAY PLANNER.           We are excited to have you!`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info);
  }
});

res.status(201).json({
  message:" user registered successfully",
  access_token : token,
  user:{
      email: newUser.email,
      location: newUser.location,
      fullNames: newUser.fullNames,
      role: newUser.role,

  }
});

} catch (error) {
  console.log;(error);
  res.status(500).json({
    message: error,
  });
}
} 