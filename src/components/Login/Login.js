import React, { useState } from 'react'

import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] =useState("")
  const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [seconderr, setSeconderr] = useState("")

  const login=async()=>{
    console.log("object")
  }
  return (
<div className='Login'>
<div className="login-area">
<h3>Login to your account</h3>
<div className="input-area">
    <div className="input-error">
    <input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder='Email or Mobile Number*' />
   <span style={{color:"red",}}>{error}</span></div>
   <div className="input-error">  
    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password*' />
    <span style={{color:"red",}}>{seconderr}</span>
   </div> 
   <button onClick={login} >LOGIN</button>
</div>
<div className="register-area">
  <span>Dont have an account? <Link to="/Register"><p>Register</p></Link></span>
<span>Forgot your password? <p>Reset here</p></span>
</div>


</div>
</div>
  )
}

export default Login
// #E72744   #F13AB1  #FD913C  #F05524