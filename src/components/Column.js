import React, { Component } from "react";
import styled from 'styled-components'
import Card from "./Card";
import { useReducer } from "react";


function Column(props) {


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

`

export default Column;


