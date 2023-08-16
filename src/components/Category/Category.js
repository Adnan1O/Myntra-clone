import React from 'react'
import "./Category.css"

function Category() {

  return (
    <div className='Category'>
      <div className="title">
        <h1> OMG! DEALS</h1>
        <span>ALL THE CURRENT BEST DEALS</span>
      </div>
    <div className="slider">
      <div className='slide-item'>
  <img src="https://blackberrys.com/cdn/shop/files/check-casual-shirt-in-blue-westley-blackberrys-clothing-1.jpg?v=1685948119"
  alt="" height={200} />
 <p>Trendy Casuals </p>
 <strong>FLAT 60% OFF</strong>
  </div>

  <div className='slide-item'>
  <img src="https://img1.eshakti.com/clothimages/CL0088437MP.jpg"
  alt=""  />
 <p>Elevated Classic</p>
 <strong>40-70% OFF</strong>
  </div>

  <div className='slide-item'>
  <img src="https://www.thelabellife.com/cdn/shop/files/IceEmbroideredCollarShirt5.jpg?v=1689752229&width=1574"
  alt="" />
 <p>Timeless Couture</p>
 <strong>MIN. 40% OFF</strong>
  </div>

  <div className='slide-item'>
  <img src="https://images.meesho.com/images/products/158343433/bw4y0_512.webp"
  alt=""  />
 <p>Elegance Redefined</p>
 <strong>MIN. 50% OFF</strong>
  </div>

  <div className='slide-item'>
  <img src="https://media.boohoo.com/i/boohoo/bmm10249_camel_xl/male-camel-tall-single-breasted-wool-look-overcoat/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
  alt="" />
 <p>Effortless Style</p>
 <strong>Under $899</strong>
  </div>

  <div className='slide-item'>
  <img src="https://img0.junaroad.com/uiproducts/17784021/zoom_0-1623324641.jpg"
  alt="" />
 <p>Dashing Picks</p>
 <strong>MIN. 60% OFF</strong>
  </div>
 
  </div>
  
    </div>
  )
}

export default Category
