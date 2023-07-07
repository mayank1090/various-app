// src/components/CartItem.js
import React from 'react';
import '../Style/Cartitem.css';

function CartItem({ item, onRemoveItem }) {
  const handleRemoveItem = () => {
    onRemoveItem(item.id);
  };

  return (
    <>
  
    <li>
      <span>{item.name}</span>
      <span>{item.price} <span>&#8377;</span></span>
      <button onClick={handleRemoveItem}>Remove</button>
    </li>
    </>
  );
}

export default CartItem;
