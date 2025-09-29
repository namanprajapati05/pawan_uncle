import React from 'react'
import style from  "./change_password.module.css"
import {Link} from "react-router-dom"

const Change_password = () => {
  return (
   <>
   
    <div className={style.nav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </div>
   

   <form action="" className={style.form}>

    <h2>Change Password</h2>
    <div className={style.line}></div>
    
    <p>Old Password</p>
    <input type="text"  />
   

    <p>New Password</p>
    <input type="text"  />


     <p>Confirm <br /> Password</p>
    <input type="text"  />

     <Link  to="/change" >
     <button>Change password</button>
     </Link>
   </form>


   </>
  )
}

export default Change_password
