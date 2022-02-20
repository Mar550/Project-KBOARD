import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import {RiLockPasswordFill} from 'react-icons/ri';
import {IoPersonCircleSharp} from 'react-icons/io5';
import styled from 'styled-components';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();

    useEffect(()=> {
        if(localStorage.getItem('user-info'))
        {
            history.push("/projects")
        }
    },[])

    const loginBtn = async () => {
        console.warn(email,password)
        let item={email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json"
            }
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/projects");
    }

    return (
        <Wrapper>
            <div className="divrow">
            
            <div className="divcol1">
                <img className="img" src={img}/>
                <h1> Tous vos projets,</h1>
                <h3> en un seul Board. </h3>
                <h5> KBoard vou permet de gérer votre projet en collaboration avec votre équipe.</h5>
            </div>

            <div className="divcol">
            <div className="main">
                <section className="signup">
                <img src="#" alt=""/> 
                <div className="container">
                <div className="signup-content">
                    <div  id="signup-form" className="signup-form">
                    <h2 className="form-title">Have an account ?</h2>
                
                <div className="form-group">
                    <input type="email" className="form-input" name="email" id="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" name="password" id="password" placeholder="Password" placeholder="Enter your Email" onChange={(e)=>setPassword(e.target.value)}/>
                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                </div>

                <div className="form-group">
                    <button  name="submit" id="submit" className="form-submit" onClick={loginBtn}  > LOGIN </button>
                </div>
                </div>
                    <p className="loginhere">
                        Still not registered ? <a href="#" className="loginhere-link" >Sign In here</a>
                    </p>
                </div>
                </div>
            </section>
            </div>
            
            </div>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.header`

`

export default Login;