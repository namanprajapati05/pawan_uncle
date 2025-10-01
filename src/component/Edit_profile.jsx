import React from "react";
import style from "./Edit_profile.module.css";

const Edit_profile = () => {
  return (
    <>
 
    <div className={style.edit}>
     <form action="" >
    <center>  <h1>Edit Profile</h1> </center>
       <div className={style.refer}>
        <input type="text" placeholder="Share Refer Link" />
        <button>Copy Link</button>
       </div>
       <div className={style.status}>
        <p>Status</p>
        <button>Active</button>
       </div>
    <center>   <div className={style.line}></div>  </center>
        
       <div className={style.personal}>
        <input type="text"  placeholder="Registration ID"  />
        <input type="text" placeholder="Sponsor ID" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Father's name" />
        <input type="number" placeholder="Mobile"  />
        <input type="number" placeholder="Pincode" />
        <input type="number" placeholder="Ward No." />
        <input type="email" placeholder="Email"  />
        <input type="text" placeholder="Address"  />
       </div>

   <center>    <button className={style.update}>Update Profile</button> </center>
   </form> 

</div>


    </>
  )
}

export default Edit_profile;
