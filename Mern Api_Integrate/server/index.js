const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

app.use(cors());
app.use(express.json());

app.use("/user",userRoute);
app.use("/product",productRoute);

mongoose.connect("mongodb+srv://pritesh:pritesh@cluster0.vah7f.mongodb.net/first?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Backend is Running..")
    }).catch((err)=>{
        console.log(err);
    })

app.listen(3100,()=>{
    console.log("Sever is Listing On 3100");
})