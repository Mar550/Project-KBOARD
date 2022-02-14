import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img2 from '../../assets/image2.png';

function Signup() {
    return (
        <Wrapper>
            <div className="divcol">
            <Form className="form">
            <div className="group">
            <div className="account">
                <img src={img2} className="img2" />
                <h2> Create an account </h2>
            </div>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm</Form.Label>
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
        </Wrapper>
    )
}

const Wrapper = styled.header`

.group{

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.form{
    background-color: WHITE;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    color:black;
    font-size: 18px;
    margin-top: 10%;
}

.divcol{
    width:100%;
}

.img{
    width:100%;
    margin-top:8%;
}
`


export default Signup;