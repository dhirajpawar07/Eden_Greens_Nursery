import React, { useState } from 'react';
import './App.css';

const ShoppingCart = ({ cartItems, updateCart, clearCart }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    const updatedCart = cartItems.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart);
  };

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} className="thumbnail" />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>Unit Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="item-controls">
            <button onClick={() => handleIncrease(item.id)}>+</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-buttons">
        <button onClick={() => clearCart()}>Continue Shopping</button>
        <button onClick={() => alert('Proceeding to Checkout')}>Checkout</button>
      </div>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Plant 1', thumbnail: 'https://images.unsplash.com/photo-1544257668-8b14a31d1c2b', price: 10.0, quantity: 1 },
    { id: 2, name: 'Plant 2', thumbnail: 'https://images.unsplash.com/photo-1603214801048-5d0c8d928fc9', price: 15.0, quantity: 2 },
  ]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return <ShoppingCart cartItems={cartItems} updateCart={updateCart} clearCart={clearCart} />;
};

export default App;
