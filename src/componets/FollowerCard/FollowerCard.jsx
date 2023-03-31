import React from 'react'
import "./FollowerCard.css";
import { Followers } from '../../Data/FollowerData';
function FollowerCard() {
  return (
    <div className='FollowerCard'>
      <h3>Who is Following You</h3>
      {
        Followers.map((follower,id)=>
          {
            return (
              <div className="follower">
                <div>
                  <img src={follower.img} alt="" className='followingImg' />
                  <div className='name'>
                    <span>{follower.name}</span>
                    <span>{follower.username}</span>
                  </div>
                </div>
                <button className='fc-button'>
                  Follow
                </button>
              </div>
            )
          }
        )
      }
      </div>
  )
}

export default FollowerCard