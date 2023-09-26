import React, {useState } from 'react'
import "./Navbar.css"
import myntra from "../Img/myntra.png"
import { FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import ResNavbar from './ResNavbar';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider/StateProvider"
import Profile from './Profile';
function Navbar() {
  const [responsive, setResponsive] = useState(false);
  const [{user, isLoggedIn}] = useStateValue()
  const [profile, setProfile]= useState(false)
  const open=()=>{
    setProfile(!profile)
  }
  const Open=()=>{
    setResponsive(!responsive);
  }

  return (
  <div className='Navbar'>
  <div className="links">
    <img src={myntra} alt="" height={50} />
    <ul>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME </li>
        <li>BEAUTY</li>
        <li>STUDIO</li>
    </ul>
    {/* & LIVING */}
    </div> 
    <div className="profile">
    <input type="text" placeholder='Search for Products and Brands' />
    {
    isLoggedIn ?(
      <div className="profile-area">
      <p className='hideble' onClick={open} ><FiUser/> Profile</p>
{
  profile&&(   
      <Profile/>
  )
}
      </div>
    ):(
      <Link to="/login"> <p className='hideble'><FiUser/> Profile</p></Link>
    )}
   
    <p  className='hideble'><AiOutlineHeart/> Wishlist</p>
    <p><BsBag/> Bag</p>
   <span className='menu' onClick={Open}> <HiMenuAlt1 className='icon'/></span>
    </div>
    {
        responsive && (
        <ResNavbar close={Open}/>
        )
       }
  </div>
  )
}

export default Navbar
