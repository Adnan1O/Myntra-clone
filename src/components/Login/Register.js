import React, { useState } from 'react'
import "./Login.css"
function Register() {
  const [username, setUsername] =useState("")
  const [password, setPassword] = useState("")

  const SendDetails=async()=>{
    try {
      const body = {username, password};
      console.log(body)
      const response = await fetch("http://localhost:5000/register",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
      })
      const jsonData = await response.json();
      console.log(jsonData)
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
<div className='Login'>
<div className="login-area">
<h3>Create your account</h3>
<div className="input-area">
    
    <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='Email or Mobile Number*' />
    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password*' />
    <button onClick={SendDetails}>SIGNUP</button>
</div>

</div>
</div>
  )
}

export default Register
// #E72744   #F13AB1  #FD913C  #F05524