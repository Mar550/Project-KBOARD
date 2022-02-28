import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './Board.css';
import Popup from "../../components/Popup/Popup";

const itemsFromBackend = [
  { id: 'a', title: "First task", descript: "First Description", deadline:"22/02/2022"},
 

];

const columnsFromBackend = {
  [1]: {
    name: "To Do",
    items: [itemsFromBackend]
  },
  [2]: {
    name: "In Progress",
    items: []
  },
  [3]: {
    name: "On Hold",
    items: []
  },
  [4]: {
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

  const [data,setData]=useState([]);

  useEffect( async() => {
  let result = await fetch("http://127.0.0.1:8000/api/listtasks")
  result = await result.json();
  setData(result)
  console.log(result)
  },[])

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
              <div style={{ margin: 12 }}>
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
                          padding: 10,
                          width: 250,
                          minHeight: 500,                                                
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <>
                          {data.map((item) =>
                            
                            <Draggable
                              key={item.id}
                              draggableId={item.task_name}
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
                                      padding: 25,
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
                                    <h1 className="title">{item.task_name} </h1> <hr className="line"/>
                                    <h3>{item.description}</h3>
                                    <div className="limitedate">
                                    <p className="card-text"> Starting:</p>
                                    <p>{item.date_begin}</p>
                                    </div>
                                    <div className="limitedate">
                                    <p className="card-text"> Deadline:</p>
                                    <p>{item.date_ending}</p>
                                    </div>
                                    
                                  </div>
                                    

                                );
                                
                              }}

                            </Draggable>
                            )}
                                
                            </>
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
