
const  jwt  = require('jsonwebtoken')

exports.authMiddleware = async(req,res,next)=>{
    try{
        const token = req.header("auth-token")
        if(!token) res.status(401).json({message:"you are not authorized"})
        const verifytoken = await jwt.verify(token,"workshop")
        if(!verifytoken) res.status(401).json({message:"wrong token"})
        next()
    }
    catch(error){
        res.status(500).json({message:`something went wrong ${error}`})

    }
}