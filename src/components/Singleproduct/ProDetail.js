import React from 'react'
import "./ProDetail.css"
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
function ProDetail() {
  return (
    <div className='ProDetail'>
        <div className="pro-area">
      <div className="img-area">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwheMxEM3fmSYPupbWLruSTt9zvTkSvs6w&usqp=CAU" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rwheMxEM3fmSYPupbWLruSTt9zvTkSvs6w&usqp=CAU" alt="" />
      </div>
      <div className="pro-text">
    <div className="t-area">
      <h2>THE BEAR HOUSE</h2>
      <p>Men Purple Slim Fit Casual Shirt</p>
   <div className="rating">
    <strong>4.3 <AiFillStar/></strong>|
    <span>2.8k Ratings</span>

   </div>
    </div>
    <div className="price-size">
      <div className="price-area">
      <div className="p-area">
        <strong>₹1122</strong>
        <p>MRP ₹2500</p>
        <span>(55% OFF)</span>
      </div>
      <span className='tax'>inclusive of all taxes</span>
      </div>
      <div className="size-area">
        <div className="chart-area">
          <strong>SELECT SIZE</strong>
          <span>SIZE CHART &gt;</span>
        </div>
      <div className="size-option">
         <span>38</span>
         <span>40</span>
         <span>42</span>
         <span>44</span>
         <span>46</span>
      </div>
       <div className="cart-btn-area">
        <button className='add-to-bag'><BsFillBagFill/>ADD TO BAG</button>
        <button className='wishlist'><AiOutlineHeart/>WISHLIST</button>
       </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  )
}

export default ProDetail
