import React from 'react';
import './Product.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, price, ratings, seller } = props.product;

  const handleAddtoCard = props.handleAddtoCard;
  
  

    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-item">
          <h3 className="product-name">{name}</h3>
          <h4 className="product-price">Price: ${price}</h4>
          <h5>Ratings: {ratings} Start</h5>
          <h5 className="product-seller">seller: {seller}</h5>
        </div>
        <button onClick={() => handleAddtoCard(props.product)} className="btn">
          Add to Card <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
};

export default Product;