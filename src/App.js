import React from "react";

import TextForm from "./components/TextForm";
import Card from "./components/Card";
import Column from "./components/Column";
import { useReducer } from 'react';
import styled from 'styled-components';



const initialState = { status: 1};

const reducer = (state, action) => {
  switch(action.type) {
    //Name radio input
    case "start":
      return { status: 1};
    case "progress":
      return { status: 2};
    case "pending":
      return { status: 3};
    case "done":
      return { status: 4};
  }
}
function App()
{
  return (
    <>
      <Wrapper>
        <div className="columns">
        <Column title="To Do"> 
          <Card title="Task1" description="This is the first task"/>
        </Column>

        <Column title="In Progress">
        </Column>

        <Column title="Pending"> 
        </Column>

        <Column title="Done">
        </Column>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`

.columns{
  width:100%;
  display:flex;
  flex-direction:row;
  gap:30px;
  height: 300px;
}


`

export default App; 

