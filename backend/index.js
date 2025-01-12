import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routers/userRouter.js"
import { connectDb } from "./utils/db.js";



//configuration of env file
dotenv.config()

//app initialization
const app = express();

//port initilization
const PORT = process.env.PORT || 8080;


//json data converter
app.use(bodyParser.json())

//connection between frontend and backend
app.use(cors())

//api endpoints
app.use('/auth',userRouter)

//server startpoint
app.listen(PORT,()=> {
  //Connecting database
  connectDb()
  
  console.log(`The server is running at Port: ${PORT}`);
  

})