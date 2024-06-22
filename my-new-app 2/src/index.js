// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import CartIcon from './components/CartIcon';

document.addEventListener('DOMContentLoaded', () => {
    const cartIconRoot = document.getElementById('cart-icon-root');

    if (cartIconRoot) {
        ReactDOM.createRoot(cartIconRoot).render(
            <CartProvider>
                <CartIcon />
            </CartProvider>
        );
    }
});