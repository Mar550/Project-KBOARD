import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import logo from '../assets/lock.png';
import styled from 'styled-components';

const Private = () => {
    
    return (
        <Wrapper>
            <img className="logo" src={logo} />
            <br></br>
            <h1 className="title1"> Vous tentez d'accéder à du contenu privé </h1>
            <br></br>
            <h3 className="title2"> Veuillez vous connecter pour continuer </h3>
            <br></br>
            <button className="bn3637 bn37"> Se connecter </button>
            
        </Wrapper>
    )
}

const Wrapper = styled.header `

.title1{
    font-size: 38px;
    font-weight: bold;
    text-align: center;
}

.title2{
    font-size: 35px;
    text-align: center;

}

.logo{
    width: 27.5%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.bn3637 {
    margin-left: 40%;
    padding: 0.7rem 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    backface-visibility: hidden;
    border: 0.3rem solid transparent;
    border-radius: 3rem;
  }
  
  .bn37 {
    border-color: transparent;
    background-color: #fff;
    color: #000;
    transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
  }
    
  .bn37:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
  }

`

export default Private;