import mongoose from "mongoose";

export const connectDb = () =>{
  mongoose.connect(
    process.env.MONGO_URL
  ).then( ()=> console.log("Db connected"))
  .catch ( (error) => console.log(`mongo dbb error`, error))
}