import React from 'react'
import Logo from "../../img/logo.png"
import "./LogoSearch.css"
import { UilSearch } from "@iconscout/react-unicons"
function LogoSearch() {
  return (
    <div className='LogoSearch'>
      <img src={Logo} />
      <div className="Search">
        <input type="text" placeholder='#Explore'/>
        <div className='s-icon'>
            <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
