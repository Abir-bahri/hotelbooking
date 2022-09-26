
const User = require("../models/userSchema")
const bcrypt = require('bcryptjs')
const  jwt  = require('jsonwebtoken')

const login = async(req,res)=>{
    try{
        const {password,email} = req.body
        const existuser = await User.findOne({email:email});
        if(!existuser) res.status(400).json({msg:"wrong email"})
        const validatepassword = bcrypt.compare(password,existuser.password)
        if(!validatepassword) res.status(400).json({msg:"wrong password"})
        const token = jwt.sign({email,id:existuser._id},"workshop",{expiresIn:"2h"})
        res.status(200).json({existuser,token})
    }
    catch(error){
        res.status(500).json({msg:`somthing went wrong ${error}`})
    }
}
module.exports={login}