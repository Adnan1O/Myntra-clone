import React, { useState } from 'react'
import Card from '../Card/Card'
import { useEffect } from 'react';
import "./Shirt.css"
import { Link } from 'react-router-dom';
function Shirt() {
  const [product, setProduct] = useState([])

  const getProducts=async()=>{
        try {
         const response = await fetch("http://localhost:5000/product");
         const jsonData = await response.json();
        console.log(jsonData) 
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
          <Link to={`/singleproduct/${product._id}`} key={product._id}>
             <Card product={product}  />
             </Link>
        ))
      }
   
    </div>
  )
}

export default Shirt
