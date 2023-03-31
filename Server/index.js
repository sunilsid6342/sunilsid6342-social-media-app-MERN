const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const AuthRoute=require("./Routes/AuthRoute.js")
const UserRoute=require("./Routes/UserRoute")
const PostRoute = require("./Routes/PostRoute")
const UploadRoute= require("./Routes/UploadRoute")
const path=require("path")
dotenv.config()


const app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extented:true}));
app.use(bodyParser.urlencoded({}))

app.use(express.static('public'))
app.use("/images",express.static("images"))

// app.use('/images', express.static(path.join(__dirname, 'public')))


mongoose.connect(process.env.MONGO_DB).then(()=>app.listen(process.env.PORT,()=>console.log("Database Connected With",process.env.PORT))).catch((err)=>console.log(err))


// usage of routes
app.use("/upload",UploadRoute)
app.use("/auth",AuthRoute)
app.use("/user",UserRoute)
app.use("/post",PostRoute)