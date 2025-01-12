import User from "../models/User.js";
import bcrypt from "bcrypt"
export const signUp = async(req,res)=>{
  try{
      const {name, email, password}= req.body;
      const user = await User.findOne({email})
      if(user){
        return res.status(409)
        .json({
          message :'User already exist, you can login ',
          success:false})
      }

      const userModel = new User({name, email, password})
      userModel.password = await bcrypt.hash(password,10 )
      await userModel.save()
      return res.status(201)
      .json({
        message: "Signup Successful", 
        success:true
      })

  }catch(error){
    res.status(500)
      .json({
        message: "Internal Server Error", 
        success:false
      })

  }

}

