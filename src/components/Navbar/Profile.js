import React from 'react'
  import "./Navbar.css"
import { useUserAuth } from '../StateProvider/UserAuthContext'

function Profile({close}) {
const {user, logOut} = useUserAuth()
    const Logout =async()=>{
      try {
        await logOut();
        close()
       } catch (error) {
         console.error(error.message);
       }
    }

  return (
    <div className="dropdown">
    <div className="first-d">
<p>Hello {user? user.email:""}</p>
  <span>9867794297</span>
  </div>
  <div className="second-d">
    <li>Orders</li>
    <li>Wishlist</li>
    <li>Gift Cards</li>
    <li>Contact Us</li>
    <li>Myntra Insider</li>     
  </div>

  <div className="second-d">
    <li>Myntra Credit</li>
    <li>Coupons</li>
    <li>Saved Cards</li>
    <li>Saved VPA</li>
    <li>Saved Address</li>     
  </div>

  <div className="second-d" style={{border:"none", paddingBottom:"1rem"}} >
    <li>Edit Profile </li>
    <li onClick={Logout}>Logout</li>
    
  </div>

  </div>
  )
}

export default Profile
