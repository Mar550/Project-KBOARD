import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './Board.css';
import Popup from "../../components/Popup/Popup";

const itemsFromBackend = [
  { id: 'a', title: "First task", description: "First Description", deadline:"22/02/2022"},
  { id: 'b', title: "Second task", description: "Second Description", deadline:"22/02/2022"},
  { id: 'c', title: "Third task", description: "Third Description", deadline:"22/02/2022"},
  { id: 'd', title: "Fourth task", description: "Fourth Description", deadline:"22/02/2022"},
  { id: 'e', title: "Fifth task", description: "Fifth Description", deadline:"22/02/2022"},
];

const columnsFromBackend = {
  ['a']: {
    name: "To Do",
    items: itemsFromBackend
  },
  ['b']: {
    name: "In Progress",
    items: []
  },
  ['c']: {
    name: "On Hold",
    items: []
  },
  ['d']: {
    name: "Done",
    items: []
  }
};



const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function Board() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [buttonPopup, setButtonPopup] = useState(false);
  
  const[dataBoard,setDataBoard]= useState([]);
  const[dataTask,setDataTask]= useState([]);

  const addBoard = async() => {

  }

  return (
    <>
    <div className="divcontainer">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="divcard"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="columns"
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                          
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className="cards"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#456C86"
                                        : "#black",
                                      opacity: snapshot.isDragging  
                                        ? "0.2"
                                        : "0.8",
                                    
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <h1 className="title">{item.title} </h1> <hr className="line"/>
                                    <h3>{item.description}</h3>
                                    <div className="limitedate">
                                    <p class="card-text"> Date Limite:</p>
                                    <p>{item.deadline}</p>
                                    </div>
                                    
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
      </div>
      <div>
          <button className="btn-add" onClick={() => setButtonPopup(true)}> New Task </button>
          <Popup trigger={buttonPopup} setTrigger ={setButtonPopup} />              
      </div>
      
    </>
  );
}

export default Board;
