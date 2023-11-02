
import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updateTestimony= catchAsync(async(req, res) =>{

        const requestId= req.params.id;
        const updatedDoc = await testimony.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if(!updatedDoc){
          return next(new AppError("no testimony found with that ID",404));
         }
        res.json(updatedDoc);
});