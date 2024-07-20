import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [history, setHistory] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const clearCart = () => {
    setHistory([...history, { date: new Date(), items: cartItems }]);
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, history }}>
      {children}
    </CartContext.Provider>
  );
};
