import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddToCartButton = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <button onClick={() => addToCart(item)}>
            Add to Cart (${item.price.toFixed(2)})
        </button>
    );
};

export default AddToCartButton;