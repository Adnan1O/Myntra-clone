import React from 'react'
import myntra from "../../Img/myntra.png"
import s from "../../Img/s.png"
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav'>
     <Link to="/"><img src={myntra} alt="" /></Link> 
      <div className="instruction">
        <p>BAG</p>
        <p>------</p>
        <p>ADDRESS</p>
        <p>------</p>
        <p>PAYMENT</p>
      </div>
      <div className="secure-area">
        <img src={s} alt="" />
        <p>100% SECURE</p>
      </div>
      
    </div>
  )
}

export default Nav
