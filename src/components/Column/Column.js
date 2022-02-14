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
          <h1> {props.title} </h1>
          <Card title="Task1" description="This is the first task"/>
        </div> 
      </Wrapper>
    )
}


const Wrapper = styled.header`

.column{
  background: green;
  width: 330px;
  height: 500px;
}

inputfield{
  border: 1px solid black;
}

`

export default Column;


