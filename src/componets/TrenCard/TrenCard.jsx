import React from 'react'
import "./TrenCard.css" 
import { TrendData } from '../../Data/TrendData'
function TrenCard() {
  return  (
    <div className='TrenCard'>
        <h3>Trends For you</h3>
        {
            TrendData.map((trens)=>
                {
                    return (
                        <div className='trend'>
                            <span>#{trens.name}</span>
                            <span>#{trens.shares}k Shares</span>    
                        </div>
                    )
                }
            )
        }
        
</div>
  )
}


export default TrenCard