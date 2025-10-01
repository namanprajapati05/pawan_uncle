import React from 'react'
import style from  "./change_password.module.css"
import {Link} from "react-router-dom"

const Change_password = () => {
  return (
   <>
   <div className={style.main}>
    
  <center> <form action="" className={style.form}>

    <h1>Change Password</h1>

    
   <center> <div className={style.line}></div> </center>

   <div className={style.inputs}> 
    
    <input type="text" placeholder='Old Password'  />

    <input type="text"  placeholder='New Password' />

    <input type="text"  placeholder='Confirm Password' />


  <br />
     <Link  to="" >
     <button>Change password</button>
     </Link>

    </div> 
   </form>
</center>
   </div>

   </>
  )
}

export default Change_password
