import React from 'react'
import "./Hero.css"
import hero from "../Img/hero.png"
function Hero() {
  return (
    <div className='hero'>
      <div className="hero-img" style={{backgroundImage:`url(${hero})`}}>
    <button className='a'>MEN</button>
    <button className='b'>WOMEN</button>
      </div>
    </div>
  )
}

export default Hero
