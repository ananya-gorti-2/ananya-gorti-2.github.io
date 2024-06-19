// src/components/AddToCartButton.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddToCartButton = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <button onClick={() => addToCart(item)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
