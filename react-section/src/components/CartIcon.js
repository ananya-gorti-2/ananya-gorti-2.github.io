// src/components/CartIcon.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className="relative">
            <Link to="/order-now" className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19m-12-6h.01M9 21h6M10 17h4m-4-4h4" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-1 text-sm">{cartCount}</span>
            </Link>
        </div>
    );
};

export default CartIcon;