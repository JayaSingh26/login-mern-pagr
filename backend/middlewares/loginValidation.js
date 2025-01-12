import Joi from "joi";


export const loginMiddleware = async (req, res, next)=>{
  const schema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(4).max(20).required()

  })


  const {error}= schema.validate(req.body)
  if (error) {
    return res.status(400)
    .json({message:"Bad Request", 
      error: error.details[0].message})
  } 
  
  
next()
}




