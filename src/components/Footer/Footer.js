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
            <h3>Foolish Developer</h3>
            <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul class="socials">
                <li><a href="#"> <AiFillTwitterCircle className="icon"/> </a></li>
                <li><a href="#"> <ImGooglePlus3 className="icon"/> </a></li>
                <li><a href="#"> <ImYoutube className="icon"/> </a></li>
                <li><a href="#"> <ImGithub className="icon"/> </a></li>
                <li><a href="#">  <AiFillLinkedin className="icon"/> </a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Foolish Developer</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
        </>
    )
}


export default Footer;