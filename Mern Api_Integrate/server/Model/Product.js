
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Quanity:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model("ProductData",productSchema);