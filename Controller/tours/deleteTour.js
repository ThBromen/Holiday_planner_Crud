import { tours } from "../../models";


export const deleteTour = async(req, res)=> {
  const requestId = req.params.id;
  let data = await tours.findById({ _id:requestId });
  console.log(data);
  const result = await tours.deleteMany(data);
  res.send(result);
} 