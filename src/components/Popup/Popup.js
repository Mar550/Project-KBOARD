import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import DatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CgCloseR} from 'react-icons/cg';
import './Popup.css';
import axios, { Axios } from 'axios';


function Popup(props) {

    const [inputFields, setInputField] = useState([
        { nametask: '', 
          description:'',
          starting:'',
          ending:''
        },
      ]);

    const [print, setPrint] = useState(false)
    
      const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
        
      }  
    
      const result = inputFields[0];
      let data = JSON.stringify(result);

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields);
        console.log(result);
        let data = JSON.stringify(result);
        axios
          .post('http://127.0.0.1:8000/api/task/create',data,
          {headers:{"Content-Type" : "application/json"}}).then(response =>{window.location.reload()})
        props.setTrigger(false);
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
                  <TextField
                    name="title"
                    label="Title"
                    className= "txtfield"
                    value={inputFields.nametask}
                    onChange={event => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="description"
                    label="Description"
                    className= "txtfield2"
                    value={inputFields.description}
                    onChange={event => handleChangeInput(index, event)}
                  />
                <div className="datefield">
                <p className="span"> Starting </p>
                <input
                    name="starting"
                    type="date"
                    label="Date debut"
                    className= "datefield3"
                    value={inputFields.starting}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>
                <div className="datefield">
                <p className="span"> Deadline </p>
                <input
                    name="deadline"
                    type="date"
                    label="Date Limite"
                    className= "datefield3"
                    value={inputFields.ending}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>
            </div>             
          )) }
              <button className="submit-btn" type="submit" onClick={handleSubmit}>
                ADD TASK
              </button>
            </form>
                    
                </div>
            </div>
        </>
    ) : "";
}


export default Popup;