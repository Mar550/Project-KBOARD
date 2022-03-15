import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";


const board = {
    columns: [
      {
        id: 1,
        title: "To Do",
        cards: [
          {
            id: 1,
            title: "Card title 1",
            description: "Card content",
            starting: "XX/XX/XXXX",
            deadline: "XX/XX/XXXX"
          },
          {
            id: 2,
            title: "Card title 2",
            description: "Card description",
            starting: "XX/XX/XXXX",
            deadline: "XX/XX/XXXX"
          },
          {
            id: 3,
            title: "Card title 3",
            description: "Card content",
            starting: "XX/XX/XXXX",
            deadline: "XX/XX/XXXX"
          },
          {
            id: 4,
            title: "Card title 3",
            description: "Card content",
            starting: "XX/XX/XXXX",
            deadline: "XX/XX/XXXX"
          }
        ]
      },
      {
        id: 2,
        title: "In Progress",
        cards: [
        ]
      },
      {
        id: 3,
        title: "Pending",
        cards: [
          
        ]
      },
      {
        id: 4,
        title: "Done",
        cards: [
          
        ]
      }
    ]
  };

function ControlledBoard() {

    const [data,setData]=useState([]);

    useEffect( async() => {
    let result = await fetch("http://127.0.0.1:8000/api/listtasks")
    result = await result.json();
    setData(result)
    console.log(result)
    },[])
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

function UncontrolledBoard() {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
  );
}

function Board2() {
  return (
    <Wrapper>
      <h4>Example of a controlled board</h4>
      <p>Just the card moving is implemented in this demo.</p>
      <p>
        In this kind of board, you can do whatever you want. We just mirror your
        board state.
      </p>
      <ControlledBoard />
    </Wrapper>
  );
}


const Wrapper = styled.header `

.App {
    font-family: sans-serif;
    text-align: center;
  }
  
  .react-kanban-column {
    background-color: orange;
  }
  
  .react-kanban-card {
    background-color: purple;
    color: yellow;
  }
  
  .react-kanban-card__title {
    font-size: large;
    text-decoration: underline;
    font-style: italic;
  }
  
  .react-kanban-card--dragging {
    transform: rotate(90deg);
    background-color: yellow;
    color: purple;
  }


  .react-kanban-board{
      margin-left: 7%;
  }
  
`
export default Board2;