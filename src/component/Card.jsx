import React from 'react'
import  style from "./card.module.css"

const Card = () => {
  return (
   <>
   {/* <div className={style.card}>
   <center> <h1>SUVIDHA CARD</h1> </center>
   <center> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/961px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" /> </center>
   <center> <h2>Hari Singh Kushwah</h2>   </center>
   <center>
    <h4>Father's name  : Bhagwan singh</h4>
   </center>
    <center>
    <h4>mobile no.  : 9427787987</h4>

    </center>
<center>
     <h4>user ID : 3</h4>

</center>
 <center>
    <h4>Address : sube ki goth hanmanji ka mandir wala mohalla , lashkar , ward No. 35 pincode 474001</h4>

 </center>

   <center> <div className={style.www}>
       <h2>  https://www.Pawansutccs.in </h2> 
    </div>

    </center>
   </div> */}
<div className={style.card_main}>
   <center> <div className={style.image}>
         <center> <h1>SUVIDHA CARD</h1> </center>
         <center> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/961px-Outdoors-man-portrait_%28cropped%29.jpg" alt="" /> </center>

          <center> <h2>Hari Singh Kushwah</h2>   </center>
   <center>
    <h4>Father's name  : Bhagwan singh</h4>
   </center>
    <center>
    <h4>mobile no.  : 9427787987</h4>

    </center>
<center>
     <h4>user ID : 3</h4>

</center>
 <center>
    <h4 className={style.add}>Address : sube ki goth hanmanji ka mandir wala mohalla , lashkar , ward No. 35 pincode 474001 </h4>

 </center>

   <center> <div className={style.www}>
     <center>  <p>  https://www.Pawansutccs.in </p> </center> 
    </div>

    </center>
    
    </div>
    
    </center>
    
    </div>
   </>
  )
}

export default Card
