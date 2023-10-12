import React from 'react'
import "./ProData.css"
import { ImFileText2 } from "react-icons/im";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

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
        <span>4.3 <AiFillStar/></span>
      <p> 2.8k Verified Buyers</p> 
    </div>
    </div>
</div>
  )
}

export default ProData
