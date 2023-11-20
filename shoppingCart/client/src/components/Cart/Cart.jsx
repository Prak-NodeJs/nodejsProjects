// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

export default function Cart() {
    const { cart } = useSelector((state) => state.cart);

    return (
        <div className='cart_container'>
            <h1>Hello</h1>
            {cart.map((item) => (
                <div className='cart_item' key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                        <button>Increment</button>
                        <button>Decrement</button>
                    </div>
                    <p>Subtotal: ${item.quantity * item.price}</p>
                </div>
            ))}
            <div className='subtotal'>
                <p>Total:12344</p>
                {/* Additional details, e.g., taxes, shipping, etc. */}
            </div>
        </div>
    );
}
