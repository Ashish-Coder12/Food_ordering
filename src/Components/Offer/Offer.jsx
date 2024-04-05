import React from "react";
import "./Offer.css";

function Offer({
    offers,
}) {
  return (
    <div className="offer-container">
      {/* <div className="offer-zone">
        <div className="OfferImage_Overlay"></div>
        <img className="OfferImage" src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=" alt="" />
        <h3 className="offertoday">Get 10% off on your next order</h3>
      </div> */}
      {offers.map((offer) => (
        <div className="offer-zone">
        <div className="OfferImage_Overlay"></div>
        <img className="OfferImage" src={offer.image} alt="" />
        <h3 className="offertoday">{offer.name}</h3>
        <span className="offer-description">{offer.description}</span>
      </div>
      ))}
    </div>
  );
}

export default Offer;
