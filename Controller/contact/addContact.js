import { contact,User } from "../../models";
import { transporter } from "../../utils";


export const addContact = async (req, res) => {
try{
      const emailExistsInUsers = await User.exists({ email: req.body.email });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: 'Thank you for your feedback',
        text: `Hello ${User.fullNames} !!     Thank you for your feedback on our tour.           We are excited to have you!`,
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info);
        }
      });


      await contact.create(req.body);
      console.log("contact is created successfully");
  res.status(201).json({
    message: "contact is created successfully",
  });
}catch(err){
  console.log(err.message);
  res.status(500).json({
    message:"internal server error",
  });
}
};