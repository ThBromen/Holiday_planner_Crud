import mongoose from "mongoose";
const toursSchema = mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  backdropimage: String,
  title: {
    type: String,
    required: true,
  },
  description:String,
  duration:String,
  groupsize:String,
  price: String,
  discount:String,
  tourtype:String,
  departure:String,
  seats:String,
  frommonth: String,
  tomonth:String,
  departuretime:String,
  returntime:String,
  gallery:String,
  priceincluded:String,
  pricenotincluded:String,
});
export const tours = mongoose.model("tours", toursSchema );