import React from 'react'
import "./ResNavbar.css"
import { RxCross2 } from 'react-icons/rx';

function ResNavbar({close}) {

 const closer=()=>{
    close();
  }

  return (
    <div className='ResNavbar' onClick={closer}   >
      <div className="container-res">
      <RxCross2/>
  <div className="next">
        <li className='hideit'>PROFILE</li>
        <li className='hideit'>WISHLIST</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME </li>
        <li>BEAUTY</li>
        <li>STUDIO</li>
  </div>
    </div>
    </div>
  )
}

export default ResNavbar
