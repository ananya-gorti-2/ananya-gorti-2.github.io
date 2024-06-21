import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import CartIcon from './components/CartIcon';
import AddToCartButton from './components/AddToCartButton';
import './index.css';

const itemsArray = [
    { id: 1, name: 'Fish Tacos', price: 7.99 },
    { id: 2, name: 'Deep Dish Pizza', price: 12.99 },
    { id: 3, name: 'Fried Catfish', price: 10.99 },
    { id: 4, name: 'Fried Green Tomatoes', price: 7.99 },
    { id: 5, name: 'Lobster Mac & Cheese', price: 9.99 },
    { id: 6, name: 'Bobotie', price: 11.99 },
    { id: 7, name: 'Couscous', price: 10.99 },
    { id: 8, name: 'Fufu and Soup', price: 11.99 },
    { id: 9, name: 'Jollof Rice', price: 10.99 },
    { id: 10, name: 'Maatoke', price: 9.99 },
    { id: 11, name: 'Chicken Fried Rice', price: 11.99 },
    { id: 12, name: 'Noodles with Meatballs', price: 9.99 },
    { id: 13, name: 'Spicy Citrus Noodles', price: 9.99 },
    { id: 14, name: 'Stir Fry Noodles', price: 9.99 },
    { id: 15, name: 'Vegetable Dim Sum Soup', price: 9.99 },
    { id: 16, name: 'Bisque', price: 9.99 },
    { id: 17, name: 'Bouillabaisse', price: 12.99 },
    { id: 18, name: 'Croque Monsieur', price: 10.99 },
    { id: 19, name: 'French Onion Soup', price: 9.99 },
    { id: 20, name: 'Ratatouille', price: 10.99 },
    { id: 21, name: 'Butter Chicken with Naan', price: 12.99 },
    { id: 22, name: 'Dosa with Sambar', price: 12.99 },
    { id: 23, name: 'Hyderabadi Chicken Biryani', price: 12.99 },
    { id: 24, name: 'Samosas with Chutney', price: 9.99 },
    { id: 25, name: 'Tandoori Roti', price: 7.99 },
    { id: 26, name: 'Onigiri', price: 9.99 },
    { id: 27, name: 'Sushi and Sashimi', price: 11.99 },
    { id: 28, name: 'Takoyaki', price: 9.99 },
    { id: 29, name: 'Tempura', price: 9.99 },
    { id: 30, name: 'Yakitori', price: 10.99 },
    { id: 31, name: 'Green Curry', price: 10.99 },
    { id: 32, name: 'Pad Thai', price: 10.99 },
    { id: 33, name: 'Panang curry', price: 10.99 },
    { id: 34, name: 'Spicy Green Papaya Salad', price: 9.99 }
];

const cartIconRoot = document.getElementById('cart-icon-root');
const addToCartRoots = document.querySelectorAll('.add-to-cart-root');

if (cartIconRoot) {
    ReactDOM.createRoot(cartIconRoot).render(
        <CartProvider>
            <CartIcon />
        </CartProvider>
    );
}

addToCartRoots.forEach((root) => {
    const itemId = parseInt(root.id.split('-').pop(), 10);
    const item = itemsArray.find(item => item.id === itemId);
    ReactDOM.createRoot(root).render(
        <CartProvider>
            <AddToCartButton item={item} />
        </CartProvider>
    );
});