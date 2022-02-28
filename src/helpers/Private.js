import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Private.css';
import logo from '../assets/lock.png';

const Private = () => {
    
    return (
        <>
            <img className="logo" src={logo} />
            <br></br>
            <h1 className="title1"> Vous tentez d'accéder à du contenu privé </h1>
            <br></br>
            <h3 className="title2"> Veuillez vous connecter pour continuer </h3>
            <br></br>
            <button className="bn3637 bn37"> Se connecter </button>
            
        </>
    )
}
export default Private;