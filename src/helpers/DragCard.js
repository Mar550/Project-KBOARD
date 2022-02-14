import React from "react";
import { useDrag } from "react-dnd";
import Card from "../components/Card/Card";

function DragCard({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Card
      ref={drag}
      width="150px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}/>
    
  );
}

export default DragCard;