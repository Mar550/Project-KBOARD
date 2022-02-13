import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../assets/image1.png';
import img2 from '../assets/image2.png';
import {RiLockPasswordFill} from 'react-icons/ri';
import {IoPersonCircleSharp} from 'react-icons/io5';

const Login = () => {
    return (
        <>
            <div className="divrow">
            
            <div className="divcol">
                <img className="img" src={img}/>
            </div>

            <div className="divcol">
            <Form className="form">
                <div className="group">
            <div className="account">
                <img src={img2} className="img2" />
                <h3> Have an account ?</h3>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <div>
                    <IoPersonCircleSharp/>
                    <Form.Label>Email address</Form.Label>
                </div>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <div>
                    <RiLockPasswordFill/>
                    <Form.Label> Password </Form.Label>
                </div>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me " />
            </Form.Group>
                <Button className="btn" variant="primary" type="submit">
                Submit
                </Button>
                </div>
                <h5> Still not Registered ? <a href="#"> Sign in </a></h5>
            </Form>
            
            </div>
            </div>
        </>
    )
}



export default Login;