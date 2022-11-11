const mongoose=require('mongoose')
const productSchema=mongoose.Schema(
    {
        "productId":Number,
        "productName":String,
        "brandName":String,
        "price":Number
    }
)
module.exports=mongoose.model("products",productSchema)