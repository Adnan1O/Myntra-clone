import React from 'react'
import "./Notlogged.css"
import w from "./w.JPG"
import { Link } from 'react-router-dom'
function Notlogged() {
  return (
    <div className='Notlogged'>
      <div className="please-area">
        <h3>PLEASE LOG IN</h3>
        <p>Login to view items in your wishlist</p>
        <img src={w} alt="" />
    <Link to='/login'> <button>LOGIN</button>   </Link>
      </div>

    </div>
  )
}

export default Notlogged
