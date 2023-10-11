import React, { useEffect, useState } from 'react'
import "./Singleproduct.css"
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import ProCat from './ProCat';

function Singleproduct() {

  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const singleData= async()=>{

    try {
      const response = await fetch(`http://localhost:5000/singleproduct/${productId}`)
      const jsonData = await response.json()
      setProductData(jsonData)
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
    singleData();  
  },[productId])
  return (
    <div className='Singleproduct'>
    <Navbar/>
    <ProCat/>
    </div>
  )
}

export default Singleproduct
