import React from 'react'
import img from "../../public/Rectangle 13-1.png"

function RestaurantProfileHeader() {
  return (
    <div className='restaurant-profile-header-con'>
        <div className='restaurant-profile-header'>
            <img src={img}/>
            <span>
                <p><b>Papa John's</b></p>
            </span>
        </div>
    </div>
  )
}

export default RestaurantProfileHeader
