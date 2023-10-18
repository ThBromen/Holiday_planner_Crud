import { booking } from "../../models";

export const addbooking = async (req, res) => {
try{
  await booking.create(req.body);
      console.log("booking is created successfully");
      
  res.status(201).json({
    message: "booking is created successfully",
  });
}catch(err){
  console.log(err.message);
  res.status(500).json({
    message:"internal server error",
  });
}
};