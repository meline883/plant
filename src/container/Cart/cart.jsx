import React, { useContext } from 'react';
import { CartContext } from '../Shop/CartContext';
import './cart.css'

export const Cart = () => {
    const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <>
            <div className='cart'>
                {cartItems.length === 0 ? (
                    <p style={{ color: '#fff', fontSize: '35px' }}>Cart is empty</p>
                ) : (
                    cartItems.map(product => (
                        <div key={product.id} className='products'>
                            <img width='300px' height='200px' src={product.img} alt="" />
                            <p>Product Name: {product.name}</p>
                            <p>Price` {product.price}$</p>
                            <p>Quantity: {product.quantity}</p>
                            <button className='quantityBtn' onClick={() => incrementQuantity(product.id)}>+</button>
                            <button className='quantityBtn' onClick={() => decrementQuantity(product.id)}>-</button>
                            <button className='deleteBtn' onClick={() => removeFromCart(product.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
            <div className='total-amount'>
                <h3>Total: $ {totalAmount.toFixed(2)}</h3>
            </div>
        </>
    );
};


