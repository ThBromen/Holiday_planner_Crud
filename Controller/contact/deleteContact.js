import { contact } from "../../models";


export const deleteContact = async(req, res)=> {
  const requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });
  console.log(data);
  const result = await contact.deleteMany(data);
  res.send(result);
} 