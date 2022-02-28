import React from "react";
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import './Contact.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Contact = () => {
    
  return (

    <>
      <Form className="formcontainer">

        <div className="column">         
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group> 
          <Form.Group className="mb-3">
            <Form.Label> You are </Form.Label>
            <Form.Select>
              <option>A person </option>
              <option>A team </option>
              <option>A company</option>
            </Form.Select>
          </Form.Group>
          <Form.Group id="input" className="mb-4">
            <Form.Label> Message </Form.Label>
            <Form.Control placeholder="Disabled input"  />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
      </Form>
    </>
  )
}

export default Contact;