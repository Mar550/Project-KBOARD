import React, {useState, Component } from "react";
import styled from 'styled-components'
import Card from "../Card/Card";
import './Column.css';
import AddTask from "../AddTask";
import TextForm from "../TextForm";
import GetData from "../GetData";
import Printca from "../Printcard";



const handleClick = () => { 
  console.log("hi")
}

function Column(props) {

  const [task, setTaks] = useState([]);
 
    return (
      <Wrapper>
        <div className="column">
          <h1 className="title"> {props.title} </h1>
          <hr/> 
          <Card title="Task1" description="This is the first task"/>
        </div> 
      </Wrapper>
    )
}


const Wrapper = styled.header`


`

export default Column;


