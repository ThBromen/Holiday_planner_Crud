import { User } from "../../Models";

export const getUser = async (req, res) => {
  let data = await User.find();
  console.log(data);

  res.status(200).json(data);
};