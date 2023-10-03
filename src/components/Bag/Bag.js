import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Notlogged from './Notlogged/Notlogged'

function Bag() {
  return (
    <div className='Bag'>
    <Nav/>
    <Notlogged/>
    <Footer/>
    </div>
  )
}

export default Bag
