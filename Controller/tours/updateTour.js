
import {tours } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updatetour = catchAsync(async(req, res) =>{

        const requestId= req.params.id;
        const data = await tours.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if(!data){
          return next(new AppError("no tour found with that ID",404));
         }
         console.log("the tour is updated with ID:",data._id);
        res.status(201).json(data);
});