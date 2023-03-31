import React, { useRef, useState } from 'react'
import ProfileImage from "../../img/profileImg.jpg"
import "./PostShare.css"
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from "@iconscout/react-unicons"
import {useDispatch, useSelector} from "react-redux"
import { uploadImage, uploadPost } from '../../actions/UploadAction'
function PostShare() {
    const [image,setImage]=useState()
    const imageRef=useRef();
    const desc=useRef()
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.authReducer.authData)
    const loading=useSelector((state)=>state.PostReducer.loading)
    const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER

    console.log("loading",loading)
    const onImageChange=(e)=>{
        if(e.target.files && e.target.files[0] ){
            let img= e.target.files[0]
            setImage(img)
        }
    }

    const reset=()=>{
        setImage(null)
        imageRef.current.value=""
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newPost={
            userId: user.user._id,
            desc: desc.current.value
        }
        if(image)
        {
            const formData=new FormData();
            const filename=Date.now()+image.name;
            formData.append("name",filename)
            formData.append("file",image)
            newPost.name=filename
            console.log(newPost)
            try{
                dispatch(uploadImage(formData))
            }catch(err){
                console.log(err)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }

    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt="" />
            {/* <img src={user.coverPicture? serverPublic+user.profilePicture: serverPublic+"defaultProfile.jpg"} alt="" /> */}

            <div>
                <input type="text" ref={desc} placeholder="What's Happing" />
                <div className='postOptions'>
                    <div className='options' onClick={()=>imageRef.current.click()} style={{color:"var(--photo)"}} >
                        <UilScenery />Photo
                    </div>
                    <div className='options' style={{color:"var(--video)"}}>
                        <UilPlayCircle />Video
                    </div>
                    <div className='options' style={{color:"var(--location)"}}>
                        <UilLocationPoint />Location
                    </div>
                    <div className='options' style={{color:"var(--shedule)"}}>
                        <UilSchedule />Schedule
                    </div>
                    <button className='button ps-button' onClick={handleSubmit} disabled={loading}>
                        {loading?"Uploading...": "Share"}
                    </button>
                    <div style={{display:"none"}}>
                        <input type="file" onChange={onImageChange} name='myImage' ref={imageRef} />
                    </div>
                </div>
                {
                    image && (
                        <div className='previewImage'>
                            <UilTimes onClick={()=>setImage(null)} />
                            <img src={URL.createObjectURL(image)} alt="" />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default PostShare