import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign In")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-tilte">
                <h2>{currState}</h2>    
                <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
                </div>
            <div className="login-popup-inputs">
                {currState==="Sign In"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="text" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            {currState==="Sign Up"?  <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>:<></>}
            {currState==="Sign In"?<p>Create a new account ?<span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Sign In")}> Login here</span></p>
            }
        </form>    
    </div>
  )
}

export default LoginPopup