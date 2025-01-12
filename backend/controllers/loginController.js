import User from "../models/User.js";
import bcrypt from "bcrypt"
export const login = async(req,res)=>{
  try{
      const {email, password}= req.body;
      const userExist = await User.findOne({ email })
      console.log(userExist);

      
      if(!userExist) {
        return res
        .status(403)
        .json({ success: false, message: "User not exist"})
      }


      const comparePassword = await bcrypt.compare(password, userExist.password)
      if(!comparePassword) {
        return res.status(400).json({ success: false, message: "password not match"})
      }
      

      return res.status(200).json({ success: true, message: "User login successfull", userExist})

      // const user = await User.findOne({email})
      // if(user){
      //   const isPasswordMatch = await bcrypt.compare(password, user.password)
      // }


      // if(isPasswordMatch){
      //   return res.status(200)
      //   .json({
      //     message :'Login Successful ', 
      //     success:true
      //   })

      // }
      // else{
        
      //   return res.status(401)
      //   .json({
      //     message :'Invalid Credentials ', 
      //     success:false
      //   })

      // }
      
  }
  catch(error){
    res.status(500)
      .json({
        message: "Internal Server Error", 
        success:false
      })

  }

}


