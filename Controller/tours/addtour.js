import { tours } from "../../Models";

import dotenv from "dotenv";
dotenv.config();
 import cloudinary from "cloudinary";
 cloudinary.v2;

     cloudinary.config({

      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
     });
     
export const addTour = async (req, res) => {
try{
  const backdropimage = await cloudinary.v2.uploader.upload(req.file.path);
console.log(backdropimage);

  await tours.create({
...req.body,
backdropimage: req.file.path

    }
      );
      console.log("tour is created successfully");
      
  res.status(201).json({
    message: "Tour is created successfully",
  });
}catch(err){
  console.log(err);
  res.status(500).json({
    message:"internal server error",
  });
}
};