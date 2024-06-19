// src/components/OrderNow.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const OrderNow = () => {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            {cart.map((item, index) => (
                <div key={index} className="cart-item mb-2 p-2 border-b border-gray-300">
                    <p>{item.name} - ${item.price} x {item.quantity}</p>
                </div>
            ))}
            <h3 className="text-xl font-semibold mt-4">Total: ${totalPrice}</h3>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
        </div>
    );
};

export default OrderNow;