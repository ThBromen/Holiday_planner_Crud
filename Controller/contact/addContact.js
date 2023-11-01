import { contact } from "../../models";
import { transporter } from "../../utils";
import { catchAsync } from "../Error/catchAsync";

export const addContact = catchAsync(async (req, res) => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: 'Thank you for your feedback',
        text: `Thank you for your contacting us. We are excited to connect with you soon!!`,
        html:`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Confirmation - Holiday Planner</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"> <!-- Add the Font Awesome CSS link -->
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }
                h1 {
                    color: #007BFF;
                }
                p {
                    color: #333;
                }
                a {
                    text-decoration: none;
                    color: #007BFF;
                }
                .icon {
                    font-size: 24px;
                    color: #007BFF;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1><i class="icon fas fa-envelope"></i> Contact Confirmation</h1>
                <p>Dear Vistor,</p>
                <p>Thank you for contacting our support team at Holiday Planner. We have received your message, and our team will get back to you as soon as possible.</p>
                <p>Here is a summary of your message:</p>
                <p>Your message:${req.body.reply}</p>
                <p>If you have any further questions or need immediate assistance, please feel free to <a href="mailto:support@holidayplanner.com">contact our support team</a>.</p>
                <p>We appreciate your feedback and look forward to assisting you!</p>
                <p>Sincerely,<br>Your Holiday Planner Support Team</p>
            </div>
        </body>
        </html>
        `
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
});