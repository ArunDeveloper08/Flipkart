import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,

    },
    lastname:{
        type:String,
        required:true,
        trim:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        index:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,

    },
    phone:{
        type:String,
        required:true, 
        // trim:true,

    },
})

const user = mongoose.model("user",userSchema);
export default user;