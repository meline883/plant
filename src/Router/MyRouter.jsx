import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../component/Menu/menu";
import { Home } from "../container/Home/home";
import { About } from "../container/About/about";
import { Shop } from "../container/Shop/shop";
import { Contact } from "../container/Contact/contact";
import { Cart } from "../container/Cart/cart";

export const MyRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}