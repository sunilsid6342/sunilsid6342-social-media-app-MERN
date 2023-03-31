import React from 'react'
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"

function ProfileCard({location}) {
    const ProfilePage = false;
    const user=useSelector((state)=>state.authReducer.authData)
    const posts=useSelector((state)=>state.PostReducer.posts)
    const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                {/* <img src={user.coverPicture? serverPublic+user.coverPicture: serverPublic+"defaultCover.jpg"} alt="" /> */}

                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
                {/* <img src={user.coverPicture? serverPublic+user.profilePicture: serverPublic+"defaultProfile.jpg"} alt="" /> */}

            </div>
            <div className="ProfileName">
                <span>{user.firstname}{user.lastname}</span>
                <span>{user.worksAt?user.worksAt:"Write About Yourself"}</span>
            </div>
            <div className='followStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        {/* <span>{user.following.length}</span> */}
                        <span>Sunil Kumar</span>
                        <span>Following</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        {/* <span>{user.followers.length}</span> */}
                        <span>500</span>
                        <span>Follower</span>
                    </div>
                    {
                        location==="profilePage" && (
                            <>
                                <div className='vl'></div>
                                <div className="follow">
                                    <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                                    <span>Posts</span>
                                </div>
                            </>
                        )
                    }
                </div>
                <hr />
            </div>
            {
                location==="profilePage" ? '':<span>
                    <Link to={"/profile/"+user._id} style={{textDecoration:"none",color:"inherit"}} >
                    My Proifle</Link>
                    </span>
            }
        </div>
    )
}

export default ProfileCard

// 35.2