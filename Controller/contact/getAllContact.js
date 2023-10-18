import { contact } from "../../models";


export const getAllContact = async (req, res) => {
  let data = await contact.find();
  console.log("all contacts are selected");
  res.status(200).json({
    message:"list of contacts",
    data
  });
};