
import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

email: { type: String, require: true, unique: true },
reply: { type: String, require: true, unique: true },

});
export const contact = mongoose.model("contact", contactSchema);