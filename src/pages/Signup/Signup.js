import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img2 from '../../assets/image2.png';
import './Signup.css';

function Signup() {
    return (
        <Wrapper className="container">
            <div className="divcol">
            <div className="divform">
            <Form className="form">
            <div className="group">
            <div className="account">
                <img src={img2} className="img2" />
                <h2 className="labeltitle"> Create an account </h2>
            </div>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="label">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Confirm your password </Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me " />
            </Form.Group>
                <Button variant="primary" type="submit">
                Register
                </Button>
                <h5> Already Registered ? <a href="#"> Sign up </a></h5>

            </div>
            </Form>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`

`


export default Signup;