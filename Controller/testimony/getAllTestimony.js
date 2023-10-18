import { testimony } from "../../models";


export const getAllTestimony = async (req, res) => {
  let data = await testimony.find();
  console.log("all testimoniol are selected");
  res.status(200).json({
    message:"list of testimoniol",
    data
  });
};