import React, { useState } from 'react'
import "./Post.css"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'

function Post({data}) {
  const user=useSelector((state)=>state.authReducer.authData)
  const [liked,setLiked]=useState(data.likes.includes(user.user._id))
  const [likes,setLikes]=useState(data.likes.length)
  console.log(data._id,"Data Set")
  const handleLike=()=>{
    setLiked((prep)=>!prep)
    likePost(data._id,user.user._id)
    // 1:53:07 / 3:16:45
    liked?setLikes((prep)=>!prep-1):setLikes((prep)=>!prep+1)
  }
  return (
    <div className="Post">
        <img src={ process.env.REACT_APP_PUBLIC_FOLDER + data.name} alt="" />
        <div className='postReact'>
            <img src={liked? Heart: NotLike} alt='' style={{cursor:"pointer"}} onClick={handleLike} />
            <img src={Comment} alt='' />
            <img src={NotLike} alt='' />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{likes} Likes</span>
        <div className='detail'>
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post