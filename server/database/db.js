import mongoose from "mongoose";
import dotenv from "dotenv"




const Connection=async()=>{
    dotenv.config();
  
    const USERNAME=process.env.DB_USERNAME
    const PASSWORD=process.env.DB_PASSWORD
    
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.h5j5ig0.mongodb.net/ecommerce-web`
   

try{
    await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
    console.log("database connected  Successfully")
    
}catch(error){
    console.log("Not Connected with Database",error.message)
}


}
export default Connection;