const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
require('../../DBConnect/DBConfiguration')
const productModel=require('../../Model/ProductModelAndSchema')

const ex=express();
ex.use(express.json())
ex.use(cors())
ex.post("/insertProduct",async(req,resp)=>{
    const product=new productModel(req.body);
    const result=await product.save();
    resp.send(result)
})

ex.get("/getProduct",async(req,resp)=>{
    const result=await productModel.find();
    resp.send(result);
})

ex.delete("/deleteProduct/:pid",async(req,resp)=>{
    //console.log(req.params.pid);
    const result=await productModel.deleteOne(
        {'productId':req.params.pid}
        )
    resp.send(result)
})
ex.put("/update/:pid",async(req,resp)=>{
    //console.log(req.params.pid);
    const result=await productModel.find(
        {'productId':req.params.pid}
        )
    resp.send(result)
})
ex.listen(4000)