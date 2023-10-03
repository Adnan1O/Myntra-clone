import React from 'react'
import Category from "../Category/Category"
import Men from "../Category/Men"
import Women from "../Category/Women"
import Hero from "./Hero/Hero"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div className='Home'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Men/>
    <Women/>
    <Footer/>
    </div>
  )
}

export default Home
