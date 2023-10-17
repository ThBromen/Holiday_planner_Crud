import { tours } from "../../Models";

export const getAll = async (req, res) => {
  let data = await tours.find();
  console.log(data);

  res.status(200).json(data);
};