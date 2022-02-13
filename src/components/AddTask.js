import React, { useState } from "react";
import styled from "styled-components";
import {AiFillPlusSquare} from 'react-icons/ai'
import TextForm from "./TextForm";

function AddTask (props) {

const [task, setTask] = useState();

    return (
        <Wrapper>
            <button className="addTask" onClick={props.value}>
                Add New Task <AiFillPlusSquare/>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.header`

.addTask{
    width: 80%;
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}


`

export default AddTask;