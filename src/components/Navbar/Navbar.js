import React from "react";
import './Navbar.css';
import logotr from '../../assets/klog.png';
import { Link } from "react-router-dom";


function Navbar()
{
    return (
        <>          
            <nav className="navbar">
                <div className="row">
                <img src={logotr} className="imglogo"/>
                <Link to="/contact" className="link3">
                <button className="bn3">CONTACT</button>
                </Link>
                <Link to="/register" className="link4">
                <button className="bn4">SIGNUP</button>
                </Link>
                </div>
            </nav>
        </>
    )
}


export default Navbar;