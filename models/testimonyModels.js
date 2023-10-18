
import mongoose from "mongoose";

const testimonySchema = mongoose.Schema({

rating: { type: String, require: true, unique: true },
Body: String,
userID: { type: String, require: true, unique: true },

});
export const testimony = mongoose.model("testimoniol", testimonySchema);