import React from 'react'
import "./Card.css"
import { AiOutlineHeart } from 'react-icons/ai';
function Card({product}) {
  return (
    <div className='Card'>
      <img src={product} alt="" />
  <div className="tit-des">
   <h4>{product.brand}</h4>
   <p>{product.title}</p>
   
   <div className="price-div">
   <span>RS. {product.price}</span>
    <p>RS. {product.discountedPrice}</p>
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
