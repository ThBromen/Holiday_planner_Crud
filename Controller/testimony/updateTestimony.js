
import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";

 export const updateTestimony= catchAsync(async(req, res) =>{
    try {
        const requestId= req.params.id;
        const updatedDoc = await testimony.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if (!updatedDoc) {
          return res.status(404).json({ error: 'Testimony  not found' });
        }
      
        res.json(updatedDoc);
      } catch (err) {
        console.error('Error updating testimony:', err);
        res.status(500).json({ error: 'Error updating testimony' });
      }
});