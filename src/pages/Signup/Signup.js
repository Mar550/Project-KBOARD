import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img2 from '../../assets/image2.png';
import './Signup.css';

function Signup() {

    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passwordConf,setPasswordConf]=useState("");
    const [avatar,setAvatar]=useState("");
    
    const history = useHistory();

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
        history.push ("/projects")
    }
    return (
        <Wrapper className="container">
            <div className="divcol">
            <div className="divform">
                <div className="group">
                <div className="account">
                    <img src={img2} className="img2" />
                    <h2 className="labeltitle"> Create an account </h2>
                </div>
                
                <div>
                    <label> First Name </label>
                    <input type="text" placeholder="Enter your first name" value={firstname}  onChange={(e)=>setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label> Last Name </label>
                    <input type="text" placeholder="Enter your lastname name" value={lastname}  onChange={(e)=>setLastName(e.target.value)}/>
                </div>

                <div>
                    <label> Username </label>
                    <input type="text" placeholder="Choose a username" value={username}  onChange={(e)=>setUserName(e.target.value)}/>
                </div>

                <div>
                    <label> Email </label>
                    <input type="email" placeholder="Enter your email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" placeholder="Enter your password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div>
                    <label>  Confirmation</label>
                    <input type="password" placeholder="Confirm your password" value={passwordConf}  onChange={(e)=>setPasswordConf(e.target.value)}/>
                </div>

                <div>
                    <label> Avatar </label>
                    <input type="file"  value={avatar}  onChange={(e)=>setAvatar(e.target.value)}/>
                </div>

                <button onClick={Signup}>
                    REGISTER
                </button>
                <h5> Already Registered ? <a href="#"> Login </a></h5>

                </div>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`

`


export default Signup;