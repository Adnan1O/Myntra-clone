import React, { useEffect, useState } from 'react'
import "./Singleproduct.css"
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import ProCat from './ProCat';
import ProDetail from './ProDetail';
import ProData from './ProData';
import Footer from '../Footer/Footer';



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
    console.log(productData)
  },[productId])
  return (
  <div className='Singleproduct'>
    <Navbar/>
    <div className="page-layout">
    <ProCat/>
    <ProDetail/>
    <ProData/>
    {/* <Footer/> */}
      </div> 
    </div>
  )
}

export default Singleproduct
