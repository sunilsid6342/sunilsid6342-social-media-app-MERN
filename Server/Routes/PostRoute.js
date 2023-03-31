const express = require("express")
const { createPost, getPost, updatePost, deletePost, likePost, getTimeLinePosts } = require("../Controllers/PostController")
const router = express.Router()

router.post("/",createPost)
router.get("/getpost/:id",getPost)
router.put("/updatepost/:id",updatePost)
router.delete("/delete/:id",deletePost)
router.put("/like/:id",likePost)
router.get("/timeline/:id",getTimeLinePosts)

module.exports=router