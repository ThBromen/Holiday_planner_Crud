
import {booking } from "../../models";

 export const updatebooking= async(req, res) =>{
    try {
        const requestId= req.params.id;
        const updatedDoc = await booking.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });
      
        if (!updatedDoc) {
          return res.status(404).json({ error: 'booking not found' });
        }
      
        res.json(updatedDoc);
      } catch (err) {
        console.error('Error updating booking:', err);
        res.status(500).json({ error: 'Error updating booking' });
      }
}