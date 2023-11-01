
import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

email: {
    type:String,
    require: true
},
reply: {
    type:String,
    require: true

},

});
export const contact = mongoose.model("contact", contactSchema);