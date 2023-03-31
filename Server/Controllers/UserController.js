const UserModel= require("../Models/UserModal")
const bycrypt=require("bcrypt")
const jwt = require("jsonwebtoken")

exports.registerUser=async (req,resp)=>{
    const salt= await bycrypt.genSalt(10)
    const hashPass= await bycrypt.hash(req.body.password,salt)
    req.body.password=hashPass
    const newUser= new UserModel(req.body)
    const {username}=req.body

    try{
        const olduser= await UserModel.findOne({username})
        if(olduser){
            return resp.status(400).send({message:"Username is already exist"})
        }
        const user= await newUser.save()
        const token=jwt.sign({username:user.username,id:user._id},process.env.JWT_KET,{expiresIn:"1h"})
        resp.status(200).json({user,token})
    }catch(err){
        console.log("## Error on saving data - > ##",err)
        resp.status(500).send({
            message: err.message
        })
    }
}

exports.loginUser= async (req,resp)=>{
    const {username,password}=req.body

    try{
        const user= await UserModel.findOne({username:username})
        if(user){
            const validity= await bycrypt.compare(password,user.password)
            if(!validity){
                // resp.status(200).send({message:"Login Successfull",user:user})
                resp.status(400).send({message:"Wrong Password"})
            }
            else{
                const token=jwt.sign({username:user.username,id:user._id},process.env.JWT_KET,{expiresIn:"1h"})
                resp.status(200).send({user,token})
            }
        }else{
            resp.status(400).send({message:"User Does Not Exist"})
        }

    }catch(err){
        console.log("## Error on saving data - > ##",err)
        resp.status(500).send({
            message: err.message
        })
    }
}