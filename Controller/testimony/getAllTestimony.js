import { testimony } from "../../models";


export const getAllTestimony = async (req, res) => {
  let data = await testimony.find();
  console.log("all testimony are selected");
  res.status(200).json({
    message:"list of testimony",
    data
  });
};