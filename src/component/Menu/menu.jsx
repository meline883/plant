import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import './menu.css'

export const Menu = () => {
    return (
        <div className="menu">
            <Link to='/' className="link"><h1 className="page">Plant Shop</h1></Link>
            <div className="nav">
                <nav>
                    <ul>
                        <li><Link to='/' className="link">Home</Link></li>
                        <li><Link to='/shop' className="link">Shop</Link></li>
                        <li><Link to='/about' className="link">About</Link></li>
                        <li><Link to='/contact' className="link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="card">
                <Link to='/cart'><FaCartShopping style={{ width: '30px', height: '30px', color: '#fff' }} /></Link>
            </div>
        </div>
    )
}