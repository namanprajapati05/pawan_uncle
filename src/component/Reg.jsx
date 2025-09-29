import React from 'react'
import style from './reg.module.css'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
<>
 <div className={style.nav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </div>

    <div className={style.main}>
      <h1>New Registration Create</h1>

    
      <form action="" className={style.reg_form}>
     <div className={style.line}></div>
       
      <div className={style.name}>
        <p>Full Name </p>
        <input type="text"  />
       </div>

        <div className={style.father}>
        <p>father's / Husband's  Name </p>
        <input type="text"  />
       </div>

     
      <div className={style.email}>
        <p>Email ID</p>
        <input type="text"/>
       </div>
    
     <div className={style.mobile}>
        <p>Mobile No. </p>
        <input type="text"  />
       </div>
    
    <div className={style.ward}>
        <p>ward No.</p>
        <input type="text"  />
       </div>

         <div className={style.pin}>
        <p>Pin code</p>
        <input type="text"  />
       </div>

     <div className={style.new_password}>
        <p>Create New password</p>
        <input type="text"  />
       </div>

         <div className={style.sponser}>
        <p>Sponser ID</p>
        <input type="text"  />
       </div>
       

       <div className={style.addrss}>
        <p>Address</p>
        <input type="text" />
       </div> 
      <div className={style.button}>
      
    <Link to="">  <button className={style.button1}>Reset</button> </Link>
    <Link to="">  <button className={style.button2}>Submit</button> </Link>
 
      </div>
      </form>
    </div>
</>
  )
}

export default Reg
 