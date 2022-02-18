import React from 'react';
import styled from 'styled-components';
import './Projects.css';
import {Card, Button} from 'react-bootstrap';
import imgproject from '../../assets/projectimg.jpeg';


function Projects () {
    return (
        <>
            <h1> MY PROJECTS</h1>
            <div className="containercards" >
                <Card className="card" style={{ width: '41vh' }}>
                    <Card.Img  className="img" variant="top" src={imgproject} width="180px"/>
                    <Card.Body className="body">
                        <div className="content"> 
                        <Card.Title className="title" >Card Title</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Text className="text">
                        <span> Date: </span>
                        XX/XX/XXXX
                        </Card.Text>
                        </div>
                        <Button className="button" variant="primary"> OPEN </Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '41vh' }}>
                    <Card.Img  className="img" variant="top" src={imgproject} width="180px"/>
                    <Card.Body className="body">
                        <div className="content"> 
                        <Card.Title className="title" >Card Title</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Text className="text">
                        <span> Date: </span>
                        XX/XX/XXXX
                        </Card.Text>
                        </div>
                        <Button className="button" variant="primary"> OPEN </Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '41vh' }}>
                    <Card.Img  className="img" variant="top" src={imgproject} width="180px"/>
                    <Card.Body className="body">
                        <div className="content"> 
                        <Card.Title className="title" >Card Title</Card.Title>
                        <Card.Text className="text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    
                        <Card.Text className="text">
                        <span> Date: </span>
                        XX/XX/XXXX
                        </Card.Text>
                        </div>
                        <Button className="button" variant="primary"> OPEN </Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                
            </div>
        </>
    )
}


export default Projects;