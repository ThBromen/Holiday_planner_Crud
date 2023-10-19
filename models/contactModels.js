
import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

email: {
    type:String,
    unique:false,
},
reply: {
    type:String,
    unique:false,
},

});
export const contact = mongoose.model("contact", contactSchema);