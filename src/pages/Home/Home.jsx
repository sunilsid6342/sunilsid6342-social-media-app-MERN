import React from 'react'
import PostSide from '../../componets/PostSide/PostSide'
import ProfileSide from '../../componets/ProfileSide/ProfileSide'
import RightSide from '../../componets/RightSide/RightSide'
import "./Home.css"
function Home() {
  return (
    <div className="home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}

export default Home

// 53:19 / 2:23:16


