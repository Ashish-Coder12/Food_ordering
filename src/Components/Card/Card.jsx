import React from 'react'
import Paneer from '../../assets/paneer.jpg'
import './Card.css'

function Card({
  name,price,description,image
}) {
  return (
    <div className="card mt-3">
      <div className='flex1'>
      <div className="card-inner">
          <img src={image} alt="img" style={{width: '100px', height: '70px' , scale: '0.8',aspectRatio: '1/1',borderRadius:"50px"}}  />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-description">{description}</div>
      </div>
      <div className="price mt-3">
        <span className='Value'>₹ {price}/-</span>
        <span><button className="add-btn">Add</button></span>
      </div>
    </div>
  )
}

export default Card
