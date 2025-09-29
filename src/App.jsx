import React from 'react'
import Change_password from './component/Change_password'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reg from './component/Reg'
import Profile from './component/Profile'
import Card from './component/Card'
import Edit_profile from './component/Edit_profile'
import About from './component/About'
// import User_panel from './component/User_panel'

const App = () => {
  return (
   <>
    <BrowserRouter>
    {/* <User_panel/>     */}
    <h1>component 1</h1>
     <Change_password/> 
     <br /><br />
       <h1>component 2</h1>
     <Reg/> 
     <br /><br />
       <h1>component 3</h1>
     <Profile/>
     <br /><br />
     <br /><br />

     <br /><br />
     <br /><br />

      <h1>component 4</h1>
     <Card/>
     <br /><br />
        <h1>component 5</h1>
     <Edit_profile/>
       <br /><br />
       <h1>component 6</h1>
     <About/>
    </BrowserRouter>

   </>
  )
}

export default App
