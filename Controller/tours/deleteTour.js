import { tours } from "../../models";
import { catchAsync } from "../Error/catchAsync";


export const deleteTour = catchAsync(async(req, res)=> {
  const requestId = req.params.id;
  let data = await tours.findById({ _id:requestId });
  console.log(data);
  const result = await tours.deleteMany(data);
  res.send(result);
} );