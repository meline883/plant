import React from "react";
import './contact.css'

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <div>
                    <h2 style={{ fontSize: '35px', textAlign: 'left' }} >Contact Us</h2>
                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="LastName" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />
                        <input type="text" placeholder="Message"  />
                    </form>
                    <button style={{width:'30%', height:'50px', border:'none', cursor:'pointer', }}>Send</button>
                </div>
            </div>
        </>
    )
}