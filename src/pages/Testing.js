import React, { useState, useRef } from "react";
import DragDrop from "../helpers/DragDrop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import '../helpers/DragDrop.css';

function Testing()
{
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="App">
                    <DragDrop />
                </div>
            </DndProvider>
        </>
    )
}

export default Testing;