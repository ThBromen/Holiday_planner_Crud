const PaypackJs = require("paypack-js").default;
import "dotenv/config";
import { catchAsync } from "../Error/catchAsync";
require('dotenv').config();

const paypack = new PaypackJs({ 
  client_id: process.env.APPLICATION_ID,
   client_secret: process.env.APPLICATION_SECRET
  });

export const cashIn = catchAsync(async (req, res) => {
  
  paypack.cashin({
  number: req.body.number,
  amount: req.body.amount,
    environment: "production",
  })

    .then((response) => {
      console.log(response.data);
      res.status(201).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });


  export const cashOut = catchAsync(async (req, res) => {
    paypack.cashout({
        number: req.body.number, 
        amount: req.body.amount,
        environment: "production",
      })
      .then((response) => {
        console.log(response.data);
        res.status(201).json(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

        
      });

 export const transaction = catchAsync(async (req, res) => {
          
          paypack.transactions({ offset: 0, limit: 1000000000 })
          .then((response) => {
            console.log(response.data);
            res.status(201).json(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
  });