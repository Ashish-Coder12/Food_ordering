import React from 'react'
import './Cartcard.css'
import CartItem from './CartItem'

function Cartcard() {
  return (
    <div className="cart-container">
      <h2>Your Items</h2>
      <CartItem/>
    </div>
  )
}

export default Cartcard
