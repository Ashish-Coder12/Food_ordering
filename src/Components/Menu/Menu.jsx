import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import "./Menu.css";
import Card from "../Card/Card";
import Offer from "../Offer/Offer";
import Footer from "../Footer/Footer";

const data = {
  products: [
    {
      name: "Paneer Dosa",
      price: 120,
      description: "Delicious Paneer",
      image: "https://thumbs.dreamstime.com/b/paneer-dosa-masala-crispy-indian-savory-crepe-delicious-filling-made-cottage-cheese-195902450.jpg",
    },
    {
      name: "Masala Dosa",
      price: 80,
      description: "Masala dosa with chutney and sambar", 
      image: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
    },
    {
      name :"Idli",
      price:60,
      description:"Idli with chutney and sambar",
      image: "https://t3.ftcdn.net/jpg/05/45/72/72/360_F_545727207_lm9TBhwMFKMWRsH2mjG7wlhgROEFmHAK.jpg",

    },
    {
      name: "Vada",
      price: 70,
      description: "Vada with chutney and sambar",
      image: "https://vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg",

    },
    {
      name: "Rava Dosa",
      price: 100,
      description: "Rava Dosa with chutney and sambar",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg",

    }
  ],
  offers:[
    {
      name: "10% OFF on order above 500",
      description: "On all items",
      image: "https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0="
      
    },
    // {
    //   name: "20% OFF on  order above 1000",
    //   description: "On all items",
    //   image: "https://t4.ftcdn.net/jpg/03/61/86/91/360_F_361869194_7JGmIOSj2iUNi0AYoVhVyhKvaN6PkOah.jpg"
    // }
  ]
}


function Menu() {
  return (
    <div className="Menu">
      <div className="ScrollY">
      <div className="menu-top">
        <h2>Menu</h2>
        <PiShoppingCartLight className="cart" size={25} />
      </div>
      <div className="offer">
        <span className="offer-title mt-5">Todays offer</span>
        <Offer offers={data.offers} />
      </div>
      <span className="offer-title mt-5">Items</span>
      <div className="card-container">
        {data.products.map((product) => (
          <Card
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
