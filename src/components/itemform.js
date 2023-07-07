// src/components/ItemForm.js
import React, { useState } from 'react';
import { useCart } from '../Context/Cart';
import '../Style/Itemform.css';
function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(""); // Set the default price value according to your requirements
  const { addItemToCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.trim() === '') {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
    };

    addItemToCart(newItem);
    setItemName('');
    setItemPrice(0);
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter item price"
          value={itemPrice}
          onChange={(e) => setItemPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ItemForm;
