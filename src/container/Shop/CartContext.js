import React, { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (productId) => {
        setCartItems(cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrementQuantity = (productId) => {
        setCartItems(cartItems.map(item =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId))
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};