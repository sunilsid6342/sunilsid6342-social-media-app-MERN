const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        required: false
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livein: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: []

},
    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema);