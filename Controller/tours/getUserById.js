import { User } from "../../models";

export const getById = async(req, res)=>{
  try{
  let requestId = req.params.id;
  let data = await User.findById({ _id:requestId });
  console.log("One user is selected !!");
  res.status(200).json(data);
  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};