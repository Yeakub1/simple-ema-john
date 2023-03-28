import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
  const [products, setproducts] = useState([]);
  const [card, setcard] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setproducts(data));
    }, []);

     const handleAddtoCard = (product) => {
       const newCard = [...card, product];
       setcard(newCard);
     };
  
  
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => console.log(product))}
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddtoCard={handleAddtoCard}
            ></Product>
          ))}
        </div>
        <div className="card-container">
          <h2>Order Summary</h2>
          <p>Selected Items: { card.length}</p>
        </div>
      </div>
    );
};

export default Shop;