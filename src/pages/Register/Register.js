import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img2 from '../../assets/image2.png';
import './Register.css';

function Register() {

    const history = useHistory();

    useEffect(()=> {
        if(localStorage.getItem('user-info'))
        {
            history.push("/projects")
        }
    },[])
    /**  */

    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passwordConf,setPasswordConf]=useState("");
    const [avatar,setAvatar]=useState("");
    

    const Signup = async () => {
        let user = {firstname,lastname, username,email,password,passwordConf,avatar};
        console.warn(user);
        
        let result= await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push ("/")
    }
    return (
            <div className="main">
                <section className="signup">
                <img src="#" alt=""/> 
                <div className="container">
                <div className="signup-content">
                    <div  id="signup-form" className="signup-form">
                    <h2 className="form-title">Create account</h2>
                    <div className="form-group">
                        <input type="text" className="form-input" name="firstname" id="firstname" placeholder="Your First name" value={firstname}  onChange={(e)=>setFirstName(e.target.value)}/>
                    </div>
                <div className="form-group">
                    <input type="text" className="form-input" name="lastname" id="lastname" placeholder="Your Last name" value={lastname}  onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-input" name="username" id="username" placeholder="Choose a username" value={username}  onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" name="password" id="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" value={passwordConf}  onChange={(e)=>setPasswordConf(e.target.value)}/>
                </div>
                <div className="form-group" id="fileavatar">
                    <span className="spanfile"> Choose an avatar </span>
                    <input type="file" className="form-input" name="avatar" id="files"  value={avatar}  onChange={(e)=>setAvatar(e.target.value)}/>
                </div> 
                <div className="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                </div>

                <div className="form-group">
                    <button  name="submit" id="submit" className="form-submit" onClick={Signup} > SIGN UP </button>
                </div>
                </div>
                    <Link to="/projects">
                    <p className="loginhere">
                        Already have an account ? <a href="#" className="loginhere-link">Login here</a>
                    </p>
                    </Link>
                </div>
                </div>
            </section>
            </div>        
    )
}

const Wrapper = styled.header`

`


export default Register;