const express = require("express")
const { getUsers, updateUser, deleteUser, followerUser, unFollowerUser } = require("../Controllers/UsersController")
const router = express.Router()

router.get("/:id",getUsers);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.put("/:id/follow",followerUser)
router.put("/:id/unfollow",unFollowerUser)
module.exports=router