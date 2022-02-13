import React from "react";
import './Board.css'
import {BsPlusLg} from 'react-icons/bs';
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";

function Board() 
{
    return(
        <>
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
        </>
    )
}

export default Board;