
import {booking } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updatebooking= catchAsync(async(req, res) =>{
        const requestId= req.params.id;
        const updatedDoc = await booking.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if (!updatedDoc) {
          return res.status(404).json({ error: 'booking not found' });
        }
      
        res.json(updatedDoc);
});