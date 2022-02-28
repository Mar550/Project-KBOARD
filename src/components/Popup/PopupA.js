import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import DatePicker, { getDefaultLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CgCloseR} from 'react-icons/cg';
import './Popup.css';
import axios, { Axios } from 'axios';


function Popupa(props) {

    const [inputFields, setInputField] = useState([
        { nameprojet: '',
          description:'', 
          image:'',
          begin:'',
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
      
      const result = inputFields[0];
      let data = JSON.stringify(result);

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields);
        console.log(result);
        let data = JSON.stringify(result);
        axios
          .post('http://127.0.0.1:8000/api/create',data,
          {headers:{"Content-Type" : "application/json"}})
      }

      const secondSubmit = async () => {
        console.log(inputFields);
        console.log(result);


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
                  <div className="datefield">
                  <p className="span"> Title </p>
                  <input
                    type="text"
                    name="title"
                    label="Titre"y
                    className= "txtfield"
                    value={inputFields.nameprojet}
                    onChange={event => handleChangeInput(index, event)}
                  />
                  </div>
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
                  <div className="datefield">
                  <p className="span"> Description </p>
                  <input
                    type="text"
                    name="description"
                    label="Description"
                    className= "txtfield2"
                    value={inputFields.description}
                    onChange={event => handleChangeInput(index, event)}
                  />
                  </div>
                <div className="datefield">
                <p className="span"> Starting </p>
                <input
                    name="start"
                    type="date"
                    label="Date debut"
                    className= "datefield3"
                    value={inputFields.begin}
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