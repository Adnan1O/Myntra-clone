import React from 'react'
import "./Notlogged.css"
import bag from "./bag.JPG"
import { Link } from 'react-router-dom'
function Notlogged() {
  return (
    <div className='Notlogged'>
      <img src={bag} alt="" />
      <div className="text-btn-area">
        <h3>Hey, it feels so light!</h3>
        <p>There is nothing in your bag. Let's add some items.</p>
     <Link>   <button>add items from wishlist</button></Link>
      </div>
    </div>
  )
}

export default Notlogged
