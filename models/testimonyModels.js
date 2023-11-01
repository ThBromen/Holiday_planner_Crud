
import mongoose from "mongoose";

const testimonySchema = mongoose.Schema({

rating: { type: String, require: true },
Body: String,
userID: { type: String, require: true },

});
export const testimony = mongoose.model("testimoniol", testimonySchema);