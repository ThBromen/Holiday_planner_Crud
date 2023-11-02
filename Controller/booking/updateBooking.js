
import {booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updatebooking= catchAsync(async(req, res) =>{
        const requestId= req.params.id;
        const updatedDoc = await booking.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if(!updatedDoc){
          return next(new AppError("no contact found with that ID",404));
         }
         console.log("one booking is  updated with ID:",updatedDoc._id );
        res.json(updatedDoc);
});