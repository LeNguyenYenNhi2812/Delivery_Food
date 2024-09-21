import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'
const loginPopup = ({setShowLogin}) => {
  const [loginState,setLoginState]=useState("Sign up")
  return (
    <form className="login-popup">
      <div className="login-popup-container">
      <div className="login-popup-title">
        <h>{loginState}</h>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {loginState==="Sign up"? <input type="text" placeholder='your name: ________________' required/> 
        : <></>}
       
        <input type='user name' placeholder='your username: ______________' required/>
        
        <input type="password" placeholder='password:___________________' required/>
      </div>
      <div className="login-popup-condition">
        <input type="checkbox" id="conditionCheckbox" required/> 
        <labe for="conditionCheckbox">By continuing, you agree with all privacy.</labe>
        
        <button className='login-button'>{loginState}</button>
        {loginState==="Sign up"?
        <p>Already have account. <span  onClick={()=>setLoginState("Login")}> Login</span></p> :
        <p>Don't have an account. <span onClick={()=>setLoginState("Sign up")} > Sign up</span></p>  
        
        }
      </div>
      </div>
    </form>
  )
}

export default loginPopup
