import React, { useState } from 'react'
import g from "./img/g.png"
import f from "./img/f.png"
import phone from "./img/phone.png"

import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../StateProvider/UserAuthContext'

function Login() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
const [error, setError] = useState("")
const {logIn,googleSignIn} = useUserAuth()
const navigate = useNavigate()
  const login=async(e)=>{
    e.preventDefault()
    setError("");
    try { 
    await logIn(email, password)  
    navigate('/') 
    } catch (error) {
      setError(error.message);
    }
  }
  const handleGoogleLogin=async(e)=>{
    e.preventDefault()
    try {
      await googleSignIn();
      navigate('/')
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
<div className='Login'>
<div className="login-area">
<h3>Login to your account</h3>
<div className="input-area">
    <div className="input-error">
    <input type="text" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email or Mobile Number*' />
   <span style={{color:"red",}}>{error}</span></div>
   <div className="input-error">  
    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password*' />
   </div> 
   <button onClick={login} >LOGIN</button>
</div>
<div className="register-area">
  <span>Dont have an account? <Link to="/Register"><p>Register</p></Link></span>
  <span>Forgot your password? <p>Reset here</p></span>
<div className="icons-area">
  <img onClick={handleGoogleLogin} src={g} alt="" />
  <img src={f} alt="" />
 <Link to='/mobile'> <img src={phone} alt=""/></Link>
        </div>

</div>


</div>
</div>
  )
}

export default Login
// #E72744   #F13AB1  #FD913C  #F05524