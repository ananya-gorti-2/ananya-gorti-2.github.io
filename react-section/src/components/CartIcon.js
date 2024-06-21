// src/components/CartIcon.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);
    return <div>({cartCount})</div>;
};

export default CartIcon;