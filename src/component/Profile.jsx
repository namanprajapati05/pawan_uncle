import React from 'react'
import style from './profile.module.css'

import { Link } from 'react-router-dom'

const Profile = () => {
  return (
   <>
   <div className={style.main}>
     <h1>Profile Image Upload</h1>
     <div className={style.line}></div>
    <span> profile image upload*</span><input type="file" />

    
   <div className="line"></div>
   
    <Link to="">  <button className={style.button1}>Reset</button> </Link>
    <Link to="">  <button className={style.button2}>Submit</button> </Link>
   </div>

   <div className={style.main2}>

    <div className={style.profile}>
        <div className={style.line1}></div>
        <h2>Profile image</h2>
        <div className={style.image}>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/961px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" width={180} />

        </div>
    </div>


   </div>
   </>
  )
}

export default Profile
