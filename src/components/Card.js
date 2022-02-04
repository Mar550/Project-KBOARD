import React, {useState} from "react";
import styled from 'styled-components'
import { FcHighPriority } from 'react-icons/fc'
import { Reducer } from "react";
import './Card.css';

function Card (props) {
  
    const [show, setShow] = useState(false);
    return (
      <Wrapper>
        {show ? (
          <div className="card"> 
          <div className="cardTitle"  > <h2 onClick={() => setShow(!show)}>TITLE</h2> </div>
          <div className="cardDescription">{props.description}</div>
          </div>
        ) : (
          <div className="card"> 
          <div className="cardTitle"> <h2 onClick={() => setShow(!show)}>TITLE</h2> </div>
          <div className="cardDescription">{props.description}</div>
          <div className="priority">
          
          <input type="radio"/> 
          <FcHighPriority/>
          </div>
          <h3> Status </h3>
          <div className="status"> 
            <div className="inputRadio">
              <label>To Do</label> 
              <input type="radio" name={props.name} ></input>
            </div>
            <div className="inputRadio">
              <label>In Progress</label> 
              <input type="radio" name={props.name2} onChange=""></input>
            </div>
            <div className="inputRadio">
              <label>Pending</label> 
              <input type="radio" name={props.name3} onChange=""></input>
            </div>
            <div className="inputRadio">
              <label>Done</label> 
              <input type="radio" name={props.name4} onChange=""></input>
            </div>
          </div>
          <button > SHOW </button>
        </div>
        )}

      </Wrapper>
    )
  }

const Wrapper = styled.header`

.card{
  background: grey;
  width: 90%;
  justify-items:center;
}

.cardTitle{
  width: 50%;
  color: orange;
}

.status{
  display:flex;
  flex-direction:row;
  gap:10px;
}

.inputRadio{
  display:flex;
  flex-direction:column;
}

.priority{
  display:flex;
  flex-direction:row;
  justify-content:end;
  font-size:25px;
}

`

export default Card;


