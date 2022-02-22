import React, {useState} from "react";
import './Card.css';
import TextForm from "../TextForm";
import Popup from "../Popup/Popup";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import {FaAngleDoubleUp} from "react-icons/fa";
import {BiEdit} from "react-icons/bi";
import {RiDeleteBinLine} from "react-icons/ri";
import { FcHighPriority } from 'react-icons/fc';
import { FaAngleDoubleDown } from 'react-icons/fa';


function Card (props) {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [show, setShow] = useState(false);

    const [inputFields, setInputField] = useState([
      { title: '', description:''},
    ]);

    const handleChangeInput = (index, event) => {
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setInputField(values);
      
    }  

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(...inputFields.map(({ title }) => title));
    }

    const [printCard, setPrintCard] = useState(false);
    
    return (
      <>
        {show ? ( 
        <div class="basic-card basic-card-dark">
            <div class="card-content">
                <div className="editdelete">
                  <BiEdit/>
                  <RiDeleteBinLine/>
                </div>
                <p class="card-title">CARD TITLE</p>
                <span class="card-text"> Limit Date</span>
                <span class="card-text"> XX/XX/XXXX</span>
                <p class="card-text"> Description </p>
                <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="priority">
                  <span class="card-text"> Priority </span>
                  <div className="highp">
                  <input type="radio"/> 
                  <FcHighPriority/>
                  </div>
                </div>
                <button className="openPopup" onClick={() => setButtonPopup(true)}> OPEN TASK </button>
            </div>

            <div class="card-icon">
              <FaAngleDoubleUp class="icon" onClick={() => setShow(!show)} />
            </div>
        </div>
        )
        :
        (
          <div class="basic-card basic-card-dark">
            <div class="card-content">
              <div className="editdelete">
                  <BiEdit/>
                  <RiDeleteBinLine/>
                </div>
              <p class="card-title">CARD TITLE</p>
                <span class="card-text"> Limit Date</span>
                <span class="card-text"> XX/XX/XXXX</span>
                <p class="card-text"> Description </p>
                <p class="card-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>

            <div class="card-icon">
              <FaAngleDoubleDown class="icon" onClick={() => setShow(!show)} />
            </div>
          </div>
        )}    
        {show ? (
          <div className="card"> 
          <div className="cardTitle"> <h2 onClick={() => setShow(!show)} value ={inputFields.title}> TITLE </h2> </div>
          <div className="cardDescription">{props.description}</div>
          <form onSubmit={handleSubmit}>
            { inputFields.map((inputField, index) =>(
                <div key={index} className="containerfield">
                  <TextField
                    name="title"
                    label="Title"
                    className= "txtfield"
                    value={inputField.title}
                    onChange={event => handleChangeInput(index, event)}
                  />
                
                  <TextField
                    name="description"
                    label="Description"
                    className= "txtfield2"
                    value={inputField.description}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>             
          )) }
              <div>
                  <h2> {inputFields[0].title} </h2>
                  <h4> {inputFields[0].description} </h4>
              </div>
              <button className="submit-btn" type="submit" onClick={handleSubmit}>
                ADD TASK
              </button>
            </form>

          <div className="priority"></div>
            <input type="radio"/> 
            <FcHighPriority/>
            <h3> Date </h3>
            <button className="openPopup" onClick={() => setButtonPopup(true)}> OPEN TASK </button>
            <Popup trigger={buttonPopup} setTrigger ={setButtonPopup} />  
          </div>

        ) : (

          <div className="card"> 
          <div className="cardTitle"> <h2 onClick={() => setShow(!show)} value ={inputFields.title}> TITLE </h2> </div>
          <div className="cardDescription">{props.description}</div>
          <button className="openPopup" onClick={() => setButtonPopup(true)}> OPEN TASK </button>
          <Popup trigger={buttonPopup} setTrigger ={setButtonPopup} />  
        </div>
        )}

      </>
    )
  }


export default Card;


