import React, {useState } from 'react'
import "./Navbar.css"
import myntra from "../Img/myntra.png"
import { FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import ResNavbar from './ResNavbar';
import { Link } from 'react-router-dom';

import Profile from './Profile';
import { useUserAuth } from '../StateProvider/UserAuthContext';
function Navbar() {
  const [responsive, setResponsive] = useState(false);
  const [profile, setProfile]= useState(false)
const {user} = useUserAuth()

  const open=()=>{
    setProfile(!profile)
  }
  const Open=()=>{
    setResponsive(!responsive);
  }

  return (
  <div className='Navbar'>
  <div className="links">
 <Link to='/'> <img src={myntra} alt="" height={50} /></Link>
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
  user?<p className='hideble' onClick={open}><FiUser/>Profile</p>: 
  <Link to="/mobile"> <p className='hideble'><FiUser/> Profile</p></Link>

}
      
 { profile&&(
  <Profile close={open} />
  ) }
   
   <Link to='/Wishlist'> <p  className='hideble'><AiOutlineHeart/> Wishlist</p></Link>
   <Link to="/bag"> <p><BsBag/>Bag</p></Link>
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
