import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
<div className='Login'>
<div className="login-area">
<h3>Login to your account</h3>
<div className="input-area">
    
    <input type="text" placeholder='Email or Mobile Number*' />
    <input type="text" placeholder='Password*' />
    <button>LOGIN</button>
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