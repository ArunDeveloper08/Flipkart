
import User from "../model/user-schema.js";
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import Token from "../model/token.js";


dotenv.config();

export const userSignup = async (req, res) => {
    try {
      const exist= await User.findOne({username:req.body.username}) 
       if(exist){
        return res.status(401).json({msg:"username is already exist "})
       }

       const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {
           firstname : req.body.firstname,
           lastname : req.body.lastname,
            username:req.body.username,
            email:req.body.email,
            phone:req.body.password,
            password:hashedPassword

        };
      
     const newUser = new User(user);
     await newUser.save();
        await res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
     res.status(500).json({msg:"user does not created"})
    }
}

export const userLogin=async(req, res)=>{


    let user = await User.findOne({ username: req.body.username })
    console.log("User>>", user)
    if (!user) {
        return res.status(404).json({ msg: "user does not find " });
    }
    try{
      let match= await bcrypt.compare(req.body.password , user.password)
 
      if(match){
        const accessToken= jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '25m' })
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY)
        const newToken = new Token({ token: refreshToken })
            await newToken.save()
            return res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.firstname, username: user.username })
      }
      else {
        return res.status(400).json({ msg: "password does not match" })
    }     
    

    }catch(error){
        console.log(error.message)
        res.status(500).json({msg:"user not login "})
    }
}