import React from 'react'
import  './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="value">
        <p className="total">Total price</p>
        <p>Rs - 280/-</p>
      </div>
      <button className='order'>Order</button>
    </div>
  )
}

export default Footer
