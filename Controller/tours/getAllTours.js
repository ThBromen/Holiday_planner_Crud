import { tours } from "../../models";

export const getAll = async (req, res) => {
  let data = await tours.find();
  console.log("all tours are selected");
  res.status(200).json({
    message:"list of tours",
    data
  });
};