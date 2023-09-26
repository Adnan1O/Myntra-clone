import React, { useState } from 'react'

import "./Login.css"
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider'
function Login() {
  const [username, setUsername] =useState("")
  const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [seconderr, setSeconderr] = useState("")
const [, dispatch] = useStateValue()
  const login=async()=>{
try {
  const body = {username, password};
  const response = await fetch("http://localhost:5000/login",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(body)
  })
  const jsonData = await response.json()
  const token = jsonData.token;
  //const username = jsonData.username
  console.log(username)

  if(response.status === 200){
    localStorage.setItem("token", token)
    localStorage.setItem("username", (jsonData.username));

    dispatch({
      type: "LOG_IN",
      item:jsonData.username,
    })

    window.location.replace("/")
  }
  if(response.status === 404){
    setError(jsonData.message)
  }
  if(response.status === 401){
    setSeconderr(jsonData.message)
  }

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