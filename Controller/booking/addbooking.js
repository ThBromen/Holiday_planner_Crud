import { booking,tours,User } from "../../models";
import { transporter } from "../../utils";
import { catchAsync } from "../Error/catchAsync";

export const addbooking = catchAsync(async (req, res) => {

  const userID = req.body.userID;
  const tourID = req.body.tourID;

  const idExistsInUsers = await User.findById(userID );
  const idExistsInTours = await tours.findById(tourID );

  if(!(idExistsInUsers||idExistsInTours)) {
      return res.status(404).json({
        status:"fail",
        message:" either user or tour not found"
      });
  }
  console.log("the user exist");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: idExistsInUsers.email,
    subject: 'Thank you for booking',
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation - Holiday Planner</title>
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
            <h1><i class="icon fas fa-check-circle"></i> Booking Confirmation</h1>
            <p>Dear ${idExistsInUsers.fullNames},</p>
            <p>Thank you for booking a tour with Holiday Planner. Your booking has been confirmed, and we are excited to have you as our guest.</p>
            <p>Here are the details of your booking:</p>
            <ul>
                <li>Tour: ${idExistsInTours.destination}</li>
                <li>Date: ${ idExistsInTours.frommonth}</li>
                <li>Price: ${idExistsInTours.priceincluded}</li>
            </ul>
            <p>If you have any questions or need further assistance, please don't hesitate to <a href="mailto:support@holidayplanner.com">contact our support team</a>.</p>
            <p>We look forward to providing you with an unforgettable experience!</p>
            <p>Sincerely,<br>Your Holiday Planner Team</p>
        </div>
    </body>
    </html>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent!!');
    }
  });

  await booking.create(req.body);
      console.log("booking is created successfully");
      
  res.status(201).json({
    status:"success",
    message: "booking is created successfully",
  });

});