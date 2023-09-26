import React from 'react'
import {useStateValue} from "../StateProvider/StateProvider"
  import "./Navbar.css"


function Profile() {
    const [{user, isLoggedIn}] = useStateValue()

    const Logout =()=>{
        localStorage.setItem("username", null)
        localStorage.setItem("token", null)
        window.location.reload("/")
    }

  return (
    <div className="dropdown">
    <div className="first-d">
<p>Hello {user}</p>
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
