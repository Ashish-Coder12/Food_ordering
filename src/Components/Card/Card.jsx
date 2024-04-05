import React from 'react'
import Paneer from '../../assets/paneer.jpg'
import './Card.css'

function Card() {
  return (
    <div className="card mt-3">
      <div className="card-inner">
          <img src={Paneer} alt="img" style={{width: '100px', height: '70px' , scale: '0.8'}}  />
      </div>
      <div className="prduct-name">Paneer</div>
      <div className="prduct-description">A deliious paneer made with love</div>
      <div className="price mt-3">
        <span className='price'>Rs: 80/-</span>
        <span><button className="add-btn">Add</button></span>
      </div>
    </div>
  )
}

export default Card
