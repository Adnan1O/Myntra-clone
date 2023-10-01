import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useUserAuth } from '../StateProvider/UserAuthContext'
function Register() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess]= useState('')
  const [openModel, setOpenModel]= useState(false)
  const {signUp} = useUserAuth()

  const SendDetails=async(e)=>{
    e.preventDefault(e)
    setError("");
    try { 
      await signUp(email, password)
      setSuccess("egistration successful. Confirmation email will be sent.")
      setOpenModel(!openModel)      
      setEmail("")
      setPassword("")  
      } catch (error) {
        setError(error.message);
      }
  }
  // adnn4u@gmail.com adnanshaikh36600
  return (
<div className='Login'>
<div className="login-area">
{openModel? 
<h3> User account created <Link to='/login' style={{color:'#E72744'}} > Login </Link></h3>: 
 <h3>Create your account</h3>
 }
<div className="input-area">
    
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Email or Mobile Number*' />
    <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password*' />
    <button onClick={SendDetails}>SIGNUP</button>
</div>

</div>
</div>
  )
}

export default Register
// #E72744   #F13AB1  #FD913C  #F05524