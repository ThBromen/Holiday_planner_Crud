
import { contact } from "../../models";

 export const updateContact= async(req, res) =>{
    try {
        const requestId= req.params.id;
        const updatedDoc = await contact.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if (!updatedDoc) {
          return res.status(404).json({ error: 'contact  not found' });
        }
      
        res.json(updatedDoc);
      } catch (err) {
        console.error('Error updating contact:', err);
        res.status(500).json({ error: 'Error updating contact' });
      }
}