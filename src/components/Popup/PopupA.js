import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import DatePicker, { getDefaultLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CgCloseR} from 'react-icons/cg';
import {FaClipboardList} from 'react-icons/fa';
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
                <div className="signup-form">
                    <CgCloseR className="close-btn" onClick={() => props.setTrigger(false)}/>
                    { props.children }
            { inputFields.map((inputField, index) =>(
                <div className="container">
                <div className="signup-content">
                <h2 className="form-title"> <FaClipboardList/> Create a new project</h2>
                    <form >
                    <div  id="signup-form" className="signup-form" key={index}>                            
                        <div className="form-group">
                            <input 
                            className="form-input" 
                            type="text"
                            name="nameprojet"
                            id="text"
                            placeholder="Titre"
                            value={inputFields.nameprojet}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                        <div className="form-group">
                            <input 
                            className="form-input" 
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description"
                            value={inputFields.description}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>

                        <div className="form-group" id="fileavatar">
                            <span className="spanfile"> Choose an image </span>
                            <input 
                            type="file" 
                            className="form-input" 
                            name="image" 
                            id="files"  
                            value={inputFields.image}
                            onChange={event => handleChangeInput(index, event)} />
                        </div>
            
                        <div className="form-group">
                            <span className="spanfile"> Starting Date </span>
                            <input 
                            type="date" 
                            className="form-input" 
                            name="begin"
                            value={inputFields.begin}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                        <div className="form-group">
                            <span className="spanfile"> Ending Date </span>
                            <input 
                            type="date" 
                            className="form-input" 
                            name="end"
                            value={inputFields.end}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                    
                </div>
                <div className="form-group">
                        <button  type="submit" name="submit" id="submit" className="form-submit" onClick={handleSubmit}> 
                        ADD NEW BOARD 
                        </button>
                    </div>
                </form>
            
            </div>
            </div>             
          )) }
              
                    
                </div>
            </div>
        </>
    ) : "";
}


export default Popupa;