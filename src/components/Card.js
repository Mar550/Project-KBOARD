import React, {useState} from "react";
import styled from 'styled-components'
import { FcHighPriority } from 'react-icons/fc'
import './Card.css';
import TextForm from "./TextForm";
import Popup from "./Popup";


function Card (props) {
  
    const [show, setShow] = useState(false);

    const [inputFields, setInputField] = useState([
      { title: '', description:''},
    ]);

    const [status, setStatus] = useState([
      "To Do", "In Progress", "Pending", "Done"
    ]);

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
      <Wrapper>
        {show ? (
          <div className="card"> 
          <div className="cardTitle"> <h2 onClick={() => setShow(!show)} value ={inputFields.title}> TITLE</h2> </div>
          <div className="cardDescription">{props.description}</div>
          <TextForm/>

          <div className="priority"></div>
          <input type="radio"/> 
          <FcHighPriority/>
          <h3> Status </h3>
          <div className="status"> 
            <div className="inputRadio">
              <label>To Do</label> 
              <input type="button" name="To Do" ></input>
            </div>
            <div className="inputRadio">
              <label>In Progress</label> 
              <input type="button" name="In Progress" onChange=""></input>
            </div>
            <div className="inputRadio">
              <label>Pending</label> 
              <input type="button" name="Pending" onChange=""></input>
            </div>
            <div className="inputRadio">
              <label>Done</label> 
              <input type="button" name="Done" onChange=""></input>
            </div>
          </div>
            <button className="openPopup" onClick={() => setButtonPopup(true)}> OPEN TASK </button>
          </div>
        ) : (
          <div className="card"> 
          <div className="cardTitle"> <h2 onClick={() => setShow(!show)} value ={inputFields.title}>TITLE </h2> </div>
          <div className="cardDescription">{props.description}</div>
          <button className="openPopup" onClick={() => setButtonPopup(true)}> OPEN TASK </button>
          <Popup trigger={buttonPopup} setTrigger ={setButtonPopup} />  
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

.openPopup{
  cursor:pointer;
}
`

export default Card;


