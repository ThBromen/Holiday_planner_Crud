import { User } from "../../models";

export const getUser = async (req, res) => {
  let data = await User.find();
  console.log("list of users is selected !!");

  res.status(200).json({
    message:"list of users !!",
    data
  });
};