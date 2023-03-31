const UserModal = require("../Models/UserModal")
const bycrpt = require("bcrypt")
exports.getUsers = async (req, resp) => {
    const ids = req.params.id

    try {

        const user = await UserModal.findById(ids)
        if (user) {
            const { password, ...otherDetail } = user._doc
            resp.status(200).send(otherDetail)
        }
        else {
            resp.status(404).send({ message: "## User Not Exist ##" })
        }

    } catch (err) {
        console.log("## Error on saving data - > ##", err)
        resp.status(500).send({
            message: err.message
        })
    }
}

exports.updateUser = async (req, resp) => {
    console.log(req.body)
    const ids = req.params.id
    const { currentUserId, currentUserStatus, password } = req.body
    if (ids === currentUserId || currentUserStatus) {
        try {

            if (password) {
                const salt = await bycrpt.genSalt(10)
                req.body.password = await bycrpt.hash(password, salt)
            }
            const user = await UserModal.findByIdAndUpdate(ids, req.body, { new: true })
            resp.status(200).send(user)
        } catch (err) {
            resp.status(500).send({
                message: err.message
            })
        }
    }
    else {
        resp.status(403).send({
            message: "Access Denied! You can only update your own profile"
        })
    }

}

exports.deleteUser = async (req, resp) => {
    const ids = req.params.id

    const { currentUserId, currentUserStatus } = req.body
    if (ids === currentUserId || currentUserStatus) {
        try {
            await UserModal.findByIdAndDelete(ids)
            resp.status(200).send({ message: "User Delete Successfull" })

        } catch (err) {
            resp.status(500).send({
                message: err.message
            })
        }
    } else {
        resp.status(403).send({
            message: "Access Denied! You can only Delete your own profile"
        })
    }
}


// Follow User
exports.followerUser= async (req,resp)=>{
    const ids=req.params.id
    const {currentUserId }=req.body
    if(currentUserId===ids)
    {
        resp.status(403).send({message:"Action Forbidden !"})
    }else{
        try{
            const followerUsr=await UserModal.findById(ids)
            const followingUser=await UserModal.findById(currentUserId)
            if(!followerUsr.followers.includes(currentUserId))
            {
                await followerUsr.updateOne({$push:{followers:currentUserId}})
                await followingUser.updateOne({$push:{following:ids}})
                resp.status(200).send({
                    message:"User Followed"
                })

            }else{
                resp.status(403).send({message:"User is already followed by you"})
            }

        }catch(err)
        {
            console.log("Error -> ",err)
            resp.status(500).send({
                message:err.message
            })
        }
    }
}

// UnFollow User

exports.unFollowerUser= async (req,resp)=>{
    const ids=req.params.id
    const {currentUserId }=req.body
    if(currentUserId===ids)
    {
        resp.status(403).send({message:"Action Forbidden !"})
    }else{
        try{
            const followerUsr=await UserModal.findById(ids)
            const followingUser=await UserModal.findById(currentUserId)
            if(followerUsr.followers.includes(currentUserId))
            {
                await followerUsr.updateOne({$pull:{followers:currentUserId}})
                await followingUser.updateOne({$pull:{following:ids}})
                resp.status(200).send({
                    message:"User UnFollowed By You"
                })

            }else{
                resp.status(403).send({message:"User is already followed by you"})
            }

        }catch(err)
        {
            console.log("Error -> ",err)
            resp.status(500).send({
                message:err.message
            })
        }
    }
}