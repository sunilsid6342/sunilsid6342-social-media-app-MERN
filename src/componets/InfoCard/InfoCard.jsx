import React, { useEffect, useState } from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"
import ProfileModel from "../ProfileModel/ProfileModel"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from "../../api/UserRequest"
import { logout } from '../../actions/AuthAction'
function InfoCard() {
    const dispatch=useDispatch()
    const params=useParams();
    const profileUserId=params.id
    const [profileUser,setProfileUser]=useState({})
    const [modelOpened,setModalOpened]=useState(false);
    const user=useSelector((state)=>state.authReducer.authData)
    // 2:12:05 / 3:16:45
    useEffect(()=>{
        const fetchProfileUser=async ()=>{
            if(profileUserId===user._id)
            {
                setProfileUser(user)
                console.log(user)
            }else{
                const profileUser=await UserApi.getUser(profileUserId)
                setProfileUser(profileUser);
                console.log(profileUser)
            }
        }
    },[user])

    const handleLogout=()=>{
        dispatch(logout())
    }

  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Information</h4>
            {user._id===profileUserId?<>                <UilPen width="2rem" height="1.2rem" onClick={()=>setModalOpened(true)} />
                <ProfileModel modelOpened={modelOpened} setModalOpened={setModalOpened} /></>:''}
            
        </div>
        <div className="info">
            <span><b>Status </b></span>
            <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span><b>Lives </b></span>
            <span>{profileUser.livein}</span>
        </div>
        <div className="info">
            <span><b>Works At </b></span>
            <span>{profileUser.worksAt}</span>
        </div>
        <button className='button logout-button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard