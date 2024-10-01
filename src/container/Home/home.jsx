import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import './home.css'


export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="txt">
                    <p>Welcome to Plant Shop</p>
                    <button><Link to='/shop' className="link">Shop Now</Link></button>
                </div>
                <div className="image">
                    <div className="img1"></div>
                </div>
            </div>
            <div className="aboutPlant">
                <p className="txt1">About Plant</p>
                <p className="txt2">Plants are a kingdom of life forms that includes familiar organisms such as trees,
                    herbs, bushes, grasses, vines, ferns and mosses. Through photosynthesis,
                    they convert water and carbon dioxide into the oxygen we breathe and the sugars that provide
                    the primary fuel for life. Through nitrogen fixation, plants generate proteins that are basic
                    building blocks of life. Early fossil records of photosynthesizing organisms date from about
                    3 billion years ago. </p>
            </div>

            <div className="garden">
                <div className="img2"></div>
                <div className="img3">
                    <div className="img4"></div>
                    <p> Plants are crucial to the existence of all other living creatures on Earth,
                        both through the systemic life-support services they sustain and the food,
                        medicine and other material resources they provide.
                        The total number of described plant species hovers around 250,000.
                    </p>
                </div>
            </div>
            <div className="garden2">
                <div>
                    <p style={{ fontSize: '30px', letterSpacing: '10px', color: 'rgb(2,80,72)' }}>Plant Shop</p>
                    <button><Link to='/shop' className="link" style={{ color: 'rgb(2, 80, 72)' }}>Shop Now</Link></button>
                </div>
            </div>

            <div className="reviews">
                <div className="txt8">
                    <p>TESTIMONIAL</p>
                    <h2>What Our Customers Say</h2>
                </div>

                <div className="comments">
                    <div className="review1">
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <p className="text">Click edit button to change this text.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="review2">
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <MdOutlineStarPurple500 style={{ color: 'orange', fontSize: '30px' }} />
                        <p className="text">Click edit button to change this text.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="plantword">
                <div className="plantimg"></div>
                <div className="planttxt">
                    <h2>Uncover the World of Plant Start Your Journey Here</h2>
                    <button><Link to='/shop' className="link">Shop Now</Link></button>
                </div>
            </div>
            <div className="menu">
                <Link to='/' className="link"><h1 className="page">Plant Shop</h1></Link>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/about' className="link">About</Link></li>
                            <li><Link to='/shop' className="link">Shop</Link></li>
                            <li><Link to='/contact' className="link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/"><FaFacebook style={{ color: 'blue', fontSize: '20px' }} /></a>
                    <a href="https://x.com/?lang=ru"><FaTwitter style={{ color: 'rgb(57,148,218)', fontSize: '20px  ' }} /></a>
                    <a href="https://www.instagram.com"><FaInstagram style={{ color: 'rgb(253,0,85)', fontSize: '20px  ' }} /></a>
                    <a href="https://www.youtube.com/"><FaYoutube style={{ color: 'red', fontSize: '20px  ' }} /></a>
                </div>
            </div>

            <div className="footer">
                <p>Copyright © 2024</p>
                <p>All rights reserved</p>
            </div>
        </>
    )
}