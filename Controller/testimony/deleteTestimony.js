import { testimony } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteTestimony = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await testimony.findById({ _id:requestId });
  console.log(data);
  const result = await testimony.deleteMany(data);
  res.send(result);
});