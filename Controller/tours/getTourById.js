import { tours } from "../../models";
import { catchAsync } from "../Error/catchAsync";

export const getOneTour= catchAsync(async(req, res)=>{
  let requestId = req.params.id;
  let data = await tours.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
});