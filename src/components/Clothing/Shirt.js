import React from 'react'
import Card from '../Card/Card'
import { useEffect } from 'react';
import "./Shirt.css"

function Shirt() {
    const getProducts=async()=>{
        try {
         const response = await fetch("http://localhost:5000/product");
         const jsonData = await response.json();
         console.log(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='shirt'>
      <Card/>
    </div>
  )
}

export default Shirt
