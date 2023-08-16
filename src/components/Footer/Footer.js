import React from 'react'
import "./Footer.css"
import appstore from "../Img/appstore.webp"
import playstore from "../Img/playstore.png"
import Original from "../Img/Original.png"
import Return from "../Img/Return.png"
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
function Footer() {
  return (
<div className='Footer'>
<div className="Footer-area">
<div className="one">
<span>ONLINE SHOPPING</span>
<ul>
    <li>Men</li>
    <li>Women</li>
    <li>Kids</li>
    <li>Home & Living</li>
    <li>Beauty</li>
    <li>Gift Cards</li>
    <li>Myntra Insider</li>


</ul>
</div>

<div className="one">
<span>CUSTOMER POLICIES</span>
<ul>
    <li>Contact Us</li>
    <li>FAQ</li>
    <li>T&C</li>
    <li>Terms Of Use</li>
    <li>Track Orders</li>
    <li>Shipping</li>
    <li>Cancellation</li>
    <li>Returns</li>
    <li>Privacy policy</li>
    <li>Grievance Officer</li>
</ul>
</div>

<div className="three">
<span>EXPERIENCE MYNTRA APP ON MOBILE</span>
<div className="playstore">
<img src={playstore} height={40} alt="" />
<img src={appstore}  height={40} alt="" />
</div>
<span>KEEP IN TOUCH</span>
<div className="socials">
    <AiFillFacebook/>
    <AiFillTwitterSquare/>
    <AiFillYoutube/>
    <AiFillInstagram/>
</div>
</div>
<div className="four">
<div className="text-og">
    <img src={Original} height={50} alt="" />
        <p><strong>100% ORIGINAL</strong> guarantee for <br/> all products at myntra.com</p>
    </div>
    <div className="text-og">
<img src={Return} alt="" height={50} />
        <p><strong>Return within 14days</strong>of<br/> receiving your order</p>
    </div>
</div>
</div>
</div>
  )
}

export default Footer



















