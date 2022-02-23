import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import {CgCloseR} from 'react-icons/cg';
import './PopupProject.css';

function Popup(props) {

    const [inputFields, setInputField] = useState([
        { title: '', 
          description:'',
          deadline:''
        },
      ]);
    
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
                  <TextField
                    name="date"
                    className= "txtfield2"
                    type="date"
                    value={inputField.deadline}
                    onChange={event => handleChangeInput(index, event)}
                  />
        
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