import React from 'react'
import PostSide from '../../componets/PostSide/PostSide'
import ProfileCard from '../../componets/ProfileCard/ProfileCard'
import ProfileLeft from '../../componets/ProfileLeft/ProfileLeft'
import RightSide from "../../componets/RightSide/RightSide"
import "./Profile.css"
function Profile() {
  return (
    <div className='Profile'>
        <ProfileLeft />
        <div className="Profile-center">
        <ProfileCard location="profilePage" />
          <PostSide />
        </div>
        <RightSide />
    </div>
  )
}

export default Profile