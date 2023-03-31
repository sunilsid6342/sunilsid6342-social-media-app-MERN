const express=require("express")
const router=express.Router()
const multer=require("multer")
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/images")
    },
    filename:function(req,file,cb){
        cb(null,req.body.name)
    }
});

const upload=multer({storage:storage})

router.post("/",upload.single("file"),(req,resp)=>{
    try{
        return resp.status(200).json("File Uploaded Successfull !")
    }catch(err){
        console.log(err)
    }
})

module.exports=router