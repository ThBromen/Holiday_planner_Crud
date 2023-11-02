
import { contact } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updateContact = catchAsync(async(req, res) =>{
    try {
        const requestId= req.params.id;
        const updatedDoc = await contact.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if(!updatedDoc){
          return next(new AppError("no contact found with that ID",404));
         }
      
        res.json(updatedDoc);
      } catch (err) {
        console.error('Error updating contact:', err);
        res.status(500).json({ error: 'Error updating contact' });
      }
});