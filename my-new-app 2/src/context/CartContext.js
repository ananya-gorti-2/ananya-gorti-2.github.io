// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    });

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartCount, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
