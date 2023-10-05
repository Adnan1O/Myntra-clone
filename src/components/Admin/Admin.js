import React, { useState } from 'react'
import "./Admin.css"
function Admin() {
  const [brand, setBrand] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [discountedPrice, setDiscountedPrice] = useState("")
  const [image, setImage] = useState("")
  const [imageTwo, setImageTwo] = useState("")

  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [color, setColor] = useState("")

  const addProduct=async()=>{
    try {
      const body = {brand,title,description ,price,discountedPrice,image,
        imageTwo, gender,category,color}
      const send = await fetch("http://localhost:5000/addproduct",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <div className='Admin'>
<h2>Enter product details</h2>
<div className="break">
      <input placeholder='Enter brandname of the product'  type="text" onChange={(e)=>setBrand(e.target.value)} />
      <input placeholder='Enter title of the product' type="text" onChange={(e)=>setTitle(e.target.value)}  />
      <input placeholder='Enter Description for the product' type="text" onChange={(e)=>setDescription(e.target.value)} />
      <input placeholder='Enter price of the product ' type="text" onChange={(e)=>setPrice(e.target.value)} />
      <input placeholder='Enter discounted price of the product ' type="text" onChange={(e)=>setDiscountedPrice(e.target.value)} />   
      <input placeholder='Enter the image link' type="text" onChange={(e)=>setImage(e.target.value)} />
      <input placeholder='Enter the second image link' type="text" onChange={(e)=>setImageTwo(e.target.value)} />    
      <input placeholder='Enter color' type="text" onChange={(e)=>setColor(e.target.value)} />
     <div className="select-area">
      <label>category:</label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="tshirt">T-Shirt</option>
        <option value="shirt">Shirt</option>
        <option value="jeans">Jeans</option>
        <option value="top">Top</option>
        <option value="skirt">Skirt</option>
        {/* Add more options as needed */}
      </select>
</div>
      <div className='radio'>
        
      <label>
        <input
          type="radio"
          value="men"
          checked={gender === 'men'}
          onChange={(e)=>setGender(e.target.value)}
        />
        Men
      </label>
      <label>
        <input
          type="radio"
          value="women"
          checked={gender === 'women'}
          onChange={(e)=>setGender(e.target.value)}
        />
        Women
      </label>
    </div>
      </div>
      <button onClick={addProduct}>submit</button>
    </div>
  )
}

export default Admin
