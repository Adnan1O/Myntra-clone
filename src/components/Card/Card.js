import React from 'react'
import "./Card.css"
import { AiOutlineHeart } from 'react-icons/ai';
function Card() {
  return (
    <div className='Card'>
      <img src="https://www.mydesignation.com/wp-content/uploads/2020/02/golden-yellow-plain-tshirt-mydesignation.jpg" alt="" />
  <div className="tit-des">
   <h4>Nike</h4>
   <p>title of the image</p>
   
   <div className="price-div">
   <span>RS. 999</span>
    <p>RS. 1500</p>
    </div>
 
    </div>  
     <div className="wishlist-area">
      <button> <AiOutlineHeart/>WISHLIST</button>
      <p>Sizes: M</p>
    </div>
    </div>
  )
}

export default Card
