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

      <input type="text" onChange={(e)=>setBrand(e.target.value)} />
      <input type="text" onChange={(e)=>setTitle(e.target.value)}  />
      <input type="text" onChange={(e)=>setDescription(e.target.value)} />
      <input type="text" onChange={(e)=>setPrice(e.target.value)} />
      <input type="text" onChange={(e)=>setDiscountedPrice(e.target.value)} />
      <input type="text" onChange={(e)=>setImage(e.target.value)} />
      <input type="text" onChange={(e)=>setImageTwo(e.target.value)} />
      <input type="text" onChange={(e)=>setGender(e.target.value)} />
      <input type="text" onChange={(e)=>setCategory(e.target.value)} />
      <input type="text" onChange={(e)=>setColor(e.target.value)} />
      <button onClick={addProduct}>submit</button>
    </div>
  )
}

export default Admin
