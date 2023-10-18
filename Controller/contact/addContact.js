import { contact } from "../../models";


export const addContact = async (req, res) => {
try{
  await contact.create(req.body);
      console.log("contact is created successfully");
      
  res.status(201).json({
    message: "contact is created successfully",
  });
}catch(err){
  console.log(err.message);
  res.status(500).json({
    message:"internal server error",
  });
}
};