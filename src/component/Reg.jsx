import React from 'react'
import style from './reg.module.css'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
<>
    <div className={style.reg}>
    <center>
      <form action="" >

     <center> <h1>New Registration Create</h1> </center>


     <div className={style.line}></div>
     <div className={style.inputs}>
         
      <div className={style.name}>
  
        <input type="text"  placeholder='Full Name' />
       </div>

        <div className={style.father}>
        <input type="text" placeholder='father / Husband  Name'  />
       </div>

     
      <div className={style.email}>
        <input type="text" placeholder='Email ID' />
       </div>
    
     <div className={style.mobile}>
        <p> </p>
        <input type="text" placeholder='Mobile No.' />
       </div>
    
    <div className={style.ward}>
        <input type="text" placeholder='ward No.'  />
       </div>

         <div className={style.pin}>
        <input type="text" placeholder='Pin code' />
       </div>

     <div className={style.new_password}>
        <input type="text" placeholder='Create New password' />
       </div>

         <div className={style.sponser}>
        <input type="text" placeholder='Sponser ID' />
       </div>
       

       <div className={style.addrss}>
        <input type="text" placeholder='Address' />
       </div> 
    
    </div> 
      <div className={style.button}>
      
    <Link to="">  <button className={style.button1}>Reset</button> </Link>
    <Link to="">  <button className={style.button2}>Submit</button> </Link>
 
      </div>
      </form>
  </center>
 </div> 
</>
  )
}

export default Reg
 