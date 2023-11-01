
import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

tourID: { type: String, require: true,},
userID: { type:String, require: true } ,
isPayed: { type: String, required: true },
paymentMethod: String,
});
export const booking = mongoose.model("booking", bookingSchema);