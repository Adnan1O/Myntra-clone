import React from 'react'
import "./ProData.css"
import { ImFileText2 } from "react-icons/im";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import l1 from "./img/l1.png"
import l2 from "./img/l2.png"
import l3 from "./img/l3.png"
import l4 from "./img/l4.png"
import l5 from "./img/l5.png"



function ProData() {
  return (
<div className='ProData'>
    <div className="data-area">
    <div className="data-de">
    <h4>PRODUCT DETAILS <ImFileText2/></h4>
    <p>Purple solid Casual shirt ,has a button-down collar, button
        placket, 1 patch pocket, long regular sleeves,
        curved hem</p>
    </div>
    <div className="data-de">
    <h4>Size & Fit</h4>
    <p>Brand Fit:</p>
    <p>Fit: Slim Fit</p>
    <p>The model (height 6') is wearing a size 40</p>
    </div>
    <div className="data-de">
    <h4>Material & Care</h4>
    <p>Machine wash Only</p>
    </div>
</div>
    <div className="review-area">
    <h4>RATINGS <AiOutlineStar/></h4> 
    <div className="overall">
        <span>4.3<AiFillStar/></span>
      <p>2.8k Verified Buyers</p> 
    </div>
    <div className="indi-rating">
      <span>5 <AiFillStar/><img src={l1} alt="" /></span>
      <span>4 <AiFillStar/><img src={l2} alt="" /></span>
      <span>3 <AiFillStar/><img src={l3} alt="" /></span>
      <span>2 <AiFillStar/><img src={l4} alt="" /></span>
      <span>1 <AiFillStar/><img src={l5} alt="" /></span>
    </div>
    </div>
</div>
  )
}

export default ProData
