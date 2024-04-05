import React from 'react'
import Paneer from '../../assets/paneer.jpg'
import './Cartcard.css'

function CartItem() {
    return (
        <div className='cart-item'>
            <div className="cart-inner">
                <img src={Paneer} alt="img" style={{ width: '80px', height: '55px', scale: '0.8' }} />
                <div className="item-name">
                    <span className='product-name'>Paneer</span>
                    <span className='product-description'>A deliious paneer made with love</span>
                </div>
                <div className="price-end">
                <div className='addvalue'>
                    <div className="total">
                        <span className='cart-price' >Product price <span className='cross'>X</span></span>
                        <p className='cart-price'>Sub Total</p>
                    </div>
                </div>
                <div className="quantity">
                    <span><button className='count-btn'>-</button> 1 <button className='count-btn'>+</button></span>
                    <p>Rs <span>399/-</span></p>
                </div>
                </div>          
            </div>
        </div>
    )
}

export default CartItem
