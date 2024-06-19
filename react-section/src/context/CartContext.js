import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};