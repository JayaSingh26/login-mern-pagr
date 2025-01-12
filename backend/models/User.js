
import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    required:true,
  }
})

export default mongoose.model('user', UserSchema)
