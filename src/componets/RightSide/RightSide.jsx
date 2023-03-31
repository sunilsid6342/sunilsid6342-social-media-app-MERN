import React from 'react'
import { useState } from 'react'
import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrenCard from '../TrenCard/TrenCard'
import ShareModel from '../ShareModel/ShareModel'
import { Link } from 'react-router-dom'


function RightSide() {
  const [modelOpened,setModalOpened]=useState(false);

  return (
    <div className='RightSide'>
        <div className='navIcons'>
          <Link to="/home">
            <img src={Home} alt="" /></Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>        
        <TrenCard />
        <button className='r-button' onClick={()=>setModalOpened(true)} >
            
          Share
        </button>
        <ShareModel modelOpened={modelOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide