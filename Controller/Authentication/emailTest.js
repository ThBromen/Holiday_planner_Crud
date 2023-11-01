// import nodemailer from "nodemailer";

// const sign  = async (req,res)=>{
// const testAccount = await nodemailer.createTestAccount();

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
// }