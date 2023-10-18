import { testimony } from "../../models";


export const addTestimony = async (req, res) => {
try{
  await testimony.create(req.body);
      console.log("testimony is created successfully");
      
  res.status(201).json({
    message: "testimony is created successfully",
  });
}catch(err){
  console.log(err.message);
  res.status(500).json({
    message:"internal server error",
  });
}
};