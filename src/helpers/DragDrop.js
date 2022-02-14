import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import DragCard from "./DragCard";
import "./DragDrop.css";

const PictureList = [ 
  {
    id: 1,
    url: 
      "First url",
  },
  {
    id: 2,
    url:
      "https://www.cieau.com/wp-content/uploads/2019/11/eau_nature.jpg",
  },
  {
    id: 3,
    url:
      "https://www.cieau.com/wp-content/uploads/2019/11/eau_nature.jpg",
  },
];


const textList = [
  {
    id:1,
    url: "This is the text"
  },
  {
    id:2,
    url: "This is the second text"
  },
  {
    id:3,
    url: "This is the third text"
  },

]

function DragDrop() {

  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "text",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <DragCard url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <DragCard url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;