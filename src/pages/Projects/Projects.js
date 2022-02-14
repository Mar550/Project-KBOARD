import React from 'react';
import styled from 'styled-components';
import './Projects.css';
import {Card, Button} from 'react-bootstrap';
import imgproject from '../../assets/projectimg.jpeg';


function Projects () {
    return (
        <>
        <section className="container"> 
            <h1> MY PROJECTS</h1>
            <div className="containerCards" >
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img  className="img" variant="top" src={imgproject} width="180px" />
                    <Card.Body>
                        <Card.Title className="title" >Card Title</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button className="button" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                
            </div>
        </section>
        </>
    )
}


export default Projects;