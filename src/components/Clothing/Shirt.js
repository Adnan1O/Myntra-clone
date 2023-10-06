import React, { useState } from 'react'
import Card from '../Card/Card'
import { useEffect } from 'react';
import "./Shirt.css"

function Shirt() {
  const [product, setProduct] = useState([])
    const getProducts=async()=>{
        try {
         const response = await fetch("http://localhost:5000/product");
         const jsonData = await response.json();
         setProduct(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='shirt'>
      {
        product.map(product=>(
             <Card product={product} />
        ))
      }
   
    </div>
  )
}

export default Shirt
