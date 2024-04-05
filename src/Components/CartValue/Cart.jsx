import React from 'react'
import './Cartcard.css'
import CartItem from './CartItem'

function Cart() {
  return (
    <div className="cart-container">
      <h2>Your Items</h2>
      <CartItem/>
    </div>
  )
}

export default Cart
