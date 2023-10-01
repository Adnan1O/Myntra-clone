// import React, { useEffect, useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { Link } from 'react-router-dom'

// import { auth } from '../../firebase'
// import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth'
// import { useUserAuth } from '../StateProvider/UserAuthContext'
// function Otp() {
//     const [number, setNumber]= useState("");
//     const [error, setError] = useState("");
//     const [otp, setOtp] = useState("");
//     const [expandForm, setExpandForm] = useState(false)
//     const {updateUser } = useUserAuth()
//     const {user } = useUserAuth()
// useEffect(()=>{
//   console.log(user)
// },[])
//     const generateRecaptcha = () => {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
//     }
  
  
//   const getOtp=(e)=>{
//     e.preventDefault()
//     setError("")
//   if(number.length >= 12){
//   generateRecaptcha();


//   let appVerifier = window.recaptchaVerifier;
//   setExpandForm(true)
//   signInWithPhoneNumber(auth, number, appVerifier)  
//   .then(confirmationResult =>{
//     window.confirmationResult = confirmationResult;
//   }).catch((error)=>{
//     console.log(error);
//   });
//   }

// }
// const verifyOtp=(e)=>{
//   if (otp.length === 6) {
//     let confirmationResult = window.confirmationResult;
//     confirmationResult.confirm(otp).then((result)=>{
//       const user = result.user;
//       console.log(user)
//       updateUser(user)
//       window.location.replace("/")
//     }).catch((error)=>{
// console.log(error)
//     })
//   }
// }
//   return (
//     <div className='Login'>
//     <div className="login-area">
//       <div className="heading-area">
//       <h2>{expandForm? "Enter your otp": "WELCOME"}</h2>
//       </div>
//       <div className="inputs">
//       <div className="input-error">{
// expandForm? (
//   <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder='Enter your otp' />
// ):(
//     <PhoneInput
//     country={'us'}
//     value={this.state.phone}
//     onChange={phone => this.setState({ phone })}
//   />
// )
//       }
     
//       <span>{error}</span>
//        </div>
        
//       </div>
//       <div className="button-area">
//      <Link to="/login"><span>Login using password ?</span></Link> 
//      {expandForm?(
//        <button onClick={verifyOtp}>Submit OTP</button>
//      ):( <button onClick={getOtp}>Send OTP</button>)}
     
//       </div>
//       <div className="recaptcha-container" id='recaptcha-container'/>
//       </div>  
//     </div>
//   )
// }

// export default Otp
