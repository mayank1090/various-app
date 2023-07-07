// src/components/ShoppingCart.js
import React from 'react';
import { useCart } from '../Context/Cart';
import CartItem from './Cartitem';
import '../Style/Shoppingcart.css';
import ItemForm from './itemform';

function ShoppingCart() {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const cartItemCount = cartItems.length;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='letother'>
         <div className='one' >
          <ItemForm/>
          </div>
          <div className='one' >
      <h2>Shopping Cart</h2>
      {cartItemCount === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          <ul style={{display:"block"}}>
          <li>
                <span>Item Name</span>
                <span>Item Price</span>
                <span>Delete Item</span>
            </li>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} />
            ))}
          </ul>
          <p>Total items: {cartItemCount}</p>
          <p>Subtotal: <span>&#8377;</span>{calculateSubtotal()}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default ShoppingCart;
