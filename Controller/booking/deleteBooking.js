import { booking } from "../../models";


export const deletebooking = async(req, res)=> {
  const requestId = req.params.id;
  let data = await booking.findById({ _id:requestId });
  console.log(data);
  const result = await booking.deleteMany(data);
  res.send(result);
} 