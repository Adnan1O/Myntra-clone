import React from 'react'
import Category from "../Category/Category"
import Men from "../Category/Men"
import Women from "../Category/Women"
import Hero from "./Hero/Hero"
function Home() {
  return (
    <div className='Home'>
      <Hero/>
    <Category/>
    <Men/>
    <Women/>
    </div>
  )
}

export default Home
