const router = require("express").Router();
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

router.post("/api/register",async(req,res)=>{
    try{    
        const {fname,email,password} = req.body;
        const userData = await User.create({
            fname,email,password
        });
        res.json({message:"User Created Successfully",status:"Ok"})
    }catch(err){
        console.log("Error ===>",err)
       res.json({status:"Error",err});
    }
});

router.post("/api/login",async(req,res)=>{
    try{    
        const {email,password} = req.body;
        const userData = await User.findOne({email,password});
        if(userData){
            const token = jwt.sign({
                email:userData.email,
                password:userData.password
            },'hello')
            res.json({message:token,status:"Ok"})
        }else{
            res.json({status:"Not Found"});
        }
    }catch(err){
       console.log("🚀 ~ file: index.js:37 ~ app.post ~ err", err)
       res.json({status:"Error",err});
    }
});

module.exports = router;