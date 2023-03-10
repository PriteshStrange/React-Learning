const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("UserData",Userschema);