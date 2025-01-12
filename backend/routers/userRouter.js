import express from "express"
import{ signUp} from "../controllers/signUpController.js";
import {signupMiddleware} from "../middlewares/signUpValidation.js"
import { loginMiddleware } from "../middlewares/loginValidation.js";
import { login } from "../controllers/loginController.js";
const router = express.Router();


router.post('/signup', signupMiddleware , signUp)
router.post('/login', loginMiddleware , login)


export default router