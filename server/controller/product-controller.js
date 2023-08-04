
import Product from "../model/product-schema.js "

export const getProducts=async(req,res)=>{
try{
     const products = await Product.find({})

     res.status(200).json(products)
}catch(error){
res.status(500).json({msg:error.messsage})
}

}
export const getProductById=async(req,res)=>{
     try{
    const product = await Product.findOne({'id':req.params.id});
//     console.log(product)
    res.status(200).json(product)
     }catch(error){
          res.status(500).json({msg : 'Na mila bhai product'})
     }

}