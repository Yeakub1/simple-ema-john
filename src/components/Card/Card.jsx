import React from 'react';
import './Card.css'

const Card = (props) => {
    const { card } = props;
    
    let total = 0;
    let Shipping = 0;
    for (const product of card) {
        total = total + product.price;  
        Shipping = Shipping + product.shipping;
    }
    
    const tax = total * 7 / 100;

    const grandTotal = total + Shipping + tax;


    return (
      <div className="card">
        <h2>Order Summary</h2>
        <p>Selected Items: {card.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge ${Shipping}</p>
            <p>Tax: ${ tax}</p>
            <h4>Grand Total: ${ grandTotal}</h4>
      </div>
    );
};

export default Card;