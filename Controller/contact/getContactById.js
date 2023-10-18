import { contact } from "../../models";

export const getOneContact = async(req, res)=>{
  let requestId = req.params.id;
  let data = await contact.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
};