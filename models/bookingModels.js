
import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

tourID: { type: String, require: true,},
userID: { type:String, require: true } ,
isPayed: { type: String, required: true },
paymentMethod: String,
whoBooked:{type:String, required: true},
tourBooked :String,
Date :Number,
NumberOfTicket :Number,
Status:{type:String, Default : "pending"} 

});
export const booking = mongoose.model("booking", bookingSchema);