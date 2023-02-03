const Product = require("../Model/Product");

const router = require("express").Router();

router.post("/api/addProduct",async(req,res)=>{
    const {productName,Price,Quanity,Category} = req.body;
    const data = await Product.create({
        productName,Price,Quanity,Category
    });
    res.status(200).json({message:"Product Added Successfully",data});
});

router.get("/api/products",async(req,res)=>{
    const Productdata = await Product.find();
    res.status(200).json({Productdata});
});

router.get("/api/products/:id",async(req,res)=>{
    const id = req.params.id
    const Productdata = await Product.findById(id);
    res.status(200).json({Productdata});
});

router.put("/api/editProducts/:id",async(req,res)=>{
    const id = req.params.id;
    const userData = await Product.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({message:"Updated Successfully",userData});
});

router.delete("/api/removePrdouct/:id",async(req,res)=>{
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id);
    if(!data){
        return res.status(404).json("Product Not Found");
    }
    res.status(200).json({message:"Product Deleted"})
})



module.exports = router;