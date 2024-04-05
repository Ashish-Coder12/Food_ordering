import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import './Menu.css'
import Card from '../Card/Card';
import Offer from '../Offer/Offer';
import Footer from '../Footer/Footer';

function Menu() {
  return (
    <div className="Menu">
        <div className="menu-top">
            <h2>Menu</h2>
            <PiShoppingCartLight className="cart" size={25} />
        </div>
        <Offer />
        <span className='offer-title mt-5' >Items</span>
        <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <Footer />
    </div>
  )
}

export default Menu
