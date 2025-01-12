import Joi from "joi";

export const signupMiddleware = async (req, res, next)=>{
  const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(4).max(20).required()

  })
  const {error}= schema.validate(req.body)
  console.log(error)
  if (error) {
    return res.status(400)
    .json({message:"Bad Request", error: error.details[0].message})
  } 

  
next()
}





