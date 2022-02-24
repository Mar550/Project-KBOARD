import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import DatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CgCloseR} from 'react-icons/cg';
import './Popup.css';
import axios, { Axios } from 'axios';


function Popupa(props) {

    const [inputFields, setInputField] = useState([
        { title: '', 
          image:'',
          description:'',
          start:'',
          end:''
        },
      ]);

    const url = "http://127.0.0.1:8000/api/addproject"


    const [print, setPrint] = useState(false)
    
      const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
        
      }  
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields);
      }

      
    
    return (props.trigger) ? (
        <>
            <div className="popup">
                <div className="popup-inner">
                    <CgCloseR className="close-btn" onClick={() => props.setTrigger(false)}/>
                    { props.children }
                    <form onSubmit="#">
            { inputFields.map((inputField, index) =>(
                <div key={index} className="containerfield">
                  <input
                    type="text"
                    name="title"
                    label="Titre"
                    placeholder="Title"
                    className= "txtfield"
                    value={inputFields.title}
                    onChange={event => handleChangeInput(index, event)}
                  />
                  <div className="filefield">
                    <p className="span"> Image </p>
                  <input 
                  type="file"
                  name="image"
                  label="Picture"
                  className= "txtfield5"
                  value={inputFields.image}
                  onChange={event => handleChangeInput(index, event)}
                  />
                  </div>
                  <input
                    type="text"
                    name="description"
                    label="Description"
                    placeholder="Description"
                    className= "txtfield2"
                    value={inputFields.description}
                    onChange={event => handleChangeInput(index, event)}
                  />
                <div className="datefield">
                <p className="span"> Starting </p>
                <input
                    name="start"
                    type="date"
                    label="Date debut"
                    className= "datefield3"
                    value={inputFields.start}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>
                <div className="datefield">
                <p className="span"> Deadline </p>
                <input
                    name="end"
                    type="date"
                    label="Date Limite"
                    className= "datefield3"
                    value={inputFields.end}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>
            </div>             
          )) }
              <button className="submit-btn2" type="submit" onClick={handleSubmit}>
                ADD PROJECT
              </button>
            </form>
                    
                </div>
            </div>
        </>
    ) : "";
}


export default Popupa;