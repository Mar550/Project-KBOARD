import React from "react";
import './Footer.css';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {ImGooglePlus3} from 'react-icons/im';
import {ImYoutube} from 'react-icons/im';
import {ImGithub} from 'react-icons/im';
import {AiFillLinkedin} from 'react-icons/ai';

function Footer()
{
    return (
        <>          
            <footer className="footercontainer">
        <div class="footer-content">
            <h3> Solid Developement </h3>
            <p> Solid Development is a blog website where you will find great projects on UI/UX design and web development. You can see our full projects portfolio on the Github link below, or you can continue to navigate in this one.</p>
            <ul class="socials">
                <li><a href="#"> <AiFillTwitterCircle className="icon"/> </a></li>
                <li><a href="#"> <ImGooglePlus3 className="icon"/> </a></li>
                <li><a href="#"> <ImYoutube className="icon"/> </a></li>
                <li><a href="#"> <ImGithub className="icon"/> </a></li>
                <li><a href="#">  <AiFillLinkedin className="icon"/> </a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#"> Marouane Merno </a>  </p>
        </div>
    </footer>
        </>
    )
}


export default Footer;