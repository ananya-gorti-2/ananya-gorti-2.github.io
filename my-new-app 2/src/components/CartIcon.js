import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} /> ({cartCount})
        </div>
    );
};

export default CartIcon;
