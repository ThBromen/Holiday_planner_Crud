import { booking } from "../../models";

export const getOneBooking= async(req, res)=>{
  let requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
};