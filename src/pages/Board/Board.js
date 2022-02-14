import React from "react";
import './Board.css'
import {BsPlusLg} from 'react-icons/bs';
import Column from "../../components/Column/Column";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";
import city from '../../assets/city.jpg';

function Board() 
{
    return(
        <Wrapper className="background" style={{ backgroundImage: "url('/city2.jpeg')" }}>
        <div className="columns" >
          <Sidebar/>
          <Column title="To Do"> 
          </Column>

          <Column title="In Progress">
          </Column>

          <Column title="Pending"> 
          </Column>

          <Column title="Done">
          </Column> 
        </div>
        <div>
          <button class="bn632-hover bn20"> <BsPlusLg/> ADD TASK </button>        
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`


`

export default Board;