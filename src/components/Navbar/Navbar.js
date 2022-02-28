import React from "react";
import './Navbar.css';
import logotr from '../../assets/klog.png';



function Navbar()
{
    return (
        <>          
            <nav className="navbar">
                <div className="row">
                <img src={logotr} className="imglogo"/>
                <button className="bn3">CONTACT</button>
                <button className="bn4">SIGNUP</button>
                </div>
            </nav>
        </>
    )
}


export default Navbar;