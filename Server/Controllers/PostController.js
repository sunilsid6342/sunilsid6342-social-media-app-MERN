const mongoose= require("mongoose")
const PostModel= require("../Models/PostModal")
const UserModel = require("../Models/UserModal")

exports.createPost= async (req,resp)=>{
    const newPost =new PostModel(req.body)
    try{
        await newPost.save()
        resp.status(200).json(newPost)
    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}

exports.getPost= async (req,resp)=>{
    const ids=req.params.id
    
    try{
        const newPost =await PostModel.findById(ids)
        resp.status(200).send(newPost)
    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}

exports.updatePost= async (req,resp)=>{
    const postIds=req.params.id
    const {userId}=req.body
    
    try{
        const newPost =await PostModel.findById(postIds)
        if(newPost.userId==userId)
        {
            await PostModel.updateOne({$set:req.body})
            resp.status(200).send({
                message:"Post Update"
            })
        }else{
            resp.status(403).send({
                message:"Action Forbidden!"
            })
        }
        
    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}

exports.deletePost= async (req,resp)=>{
    const ids=req.params.id
    const {userId}=req.body
    try{
        const post=await PostModel.findById(ids)
        if(post.userId==userId)
        {
            await PostModel.deleteOne()
            resp.status(200).send({
                message:"Post Deleted"
            })
        }else{
            resp.status(403).send({
                message:"Action Forbidden!"
            })
        }

    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}

exports.likePost= async (req,resp)=>{
    const ids=req.params.id
    const {userId}=req.body
    try{
        const post= await PostModel.findById(ids)
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}})
            resp.status(200).send({
                message:"Post Liked"
            })
        }else{
            await post.updateOne({$pull:{likes:userId}})
            resp.status(200).send({
                message:"Post Unliked"
            })
        }
    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}

exports.getTimeLinePosts = async (req,resp)=>{
    const userId=req.params.id
    
    try{

        const currentUsePost= await PostModel.find({userId:userId})
        const followingPost=await UserModel.aggregate([
            {
                $match:{
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup:{
                    from: "posts",
                    localField: "following",
                    foreignField:"userId",
                    as: "followingPost"
                }
            },
            {
                $project:{
                    followingPosts:1,
                    _id:0
                }
            }
        ])
        
        console.log(followingPost)
        resp.status(200).send(currentUsePost.concat(followingPost).sort((a,b)=>{
            return b.createdAt-a.createdAt
        }))

    }catch(err){
        resp.status(500).send({
            message:err.message
        })
    }
}