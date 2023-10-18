
import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

tourID: { type: String, require: true, unique: true },
userID: String,
isPayed: { type: String, required: true },
paymentMethod: String,
});
export const booking = mongoose.model("booking", bookingSchema);