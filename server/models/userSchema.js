const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    fname:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
    isAdmin: {
        type: Boolean,
        default: false,
      },
   
});
module.exports = mongoose.model("User",userSchema);