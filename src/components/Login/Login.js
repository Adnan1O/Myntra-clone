import React from 'react'
import "./Login.css"
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
<span>Forgot your password? Reset here</span>
<span>Have trouble logging in? Get Help</span>
</div>
</div>
  )
}

export default Login
// #E72744   #F13AB1  #FD913C  #F05524