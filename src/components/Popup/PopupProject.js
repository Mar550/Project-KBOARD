import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {FaClipboardList} from 'react-icons/fa';
import './Popup.css';
import axios, { Axios } from 'axios';
import styled from "styled-components";


function PopupProject(props) {


  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};


    const [inputFields, setInputField] = useState([
        { nameprojet: '',
          description:'', 
          image:'',
          begin:'',
          end:''
        },
      ]);

    const url = "http://127.0.0.1:8000/api/addproject"

    const [trigger, setTrigger] = useState(false)
    const [print, setPrint] = useState(false)
    
      const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);
      }  
      
      const result = inputFields[0];
      let data = JSON.stringify(result);

      const handleSubmit = (e) => {
        console.log(inputFields);
        console.log(result);
        let data = JSON.stringify(result);
        axios
          .post('http://127.0.0.1:8000/api/create',data,
          {headers:{"Content-Type" : "application/json"}}).then(response =>{window.location.reload()})
        props.setTrigger(false);
      }

      

    
    return (props.trigger) ? (
        <Wrapper>
          
            <div className="popup">
                <div className="signup-form">
                    { props.children }
            { inputFields.map((inputField, index) =>(

                <div className="container">
                <div className="signup-content">
                <h2 className="form-title"> <FaClipboardList/> Create a new project</h2>                    
                    <form>
                    <div  id="signup-form" className="signup-form" key={index}>                            
                        <div className="form-group" id="form-group">
                            <input 
                            className="form-input" 
                            type="text"
                            name="nameprojet"
                            id="text"
                            placeholder="Titre"
                            value={inputFields.nameprojet}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                        <div className="form-group" id="form-group">
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
            
                        <div className="form-group" id="form-group">
                            <span className="spanfile"> Starting Date </span>
                            <input 
                            type="date" 
                            className="form-input" 
                            name="begin"
                            value={inputFields.begin}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                        <div className="form-group" id="form-group">
                            <span className="spanfile"> Ending Date </span>
                            <input 
                            type="date" 
                            className="form-input" 
                            name="end"
                            min={disablePastDate()}
                            value={inputFields.end}
                            onChange={event => handleChangeInput(index, event)}/>
                        </div>
            
                    
                </div>
                  <div className="form-group" id="buttons">
                        <button  type="submit" name="submit" id="submit" className="form-submit" onClick={handleSubmit}> 
                         ADD PROJECT 
                        </button>
                        <button  type="submit" name="submit" id="submit" className="form-submit" onClick={() => props.setTrigger(false)}> 
                        CLOSE
                        </button>
                    </div>
                </form>
            
            </div>
            </div>           
          )) }
              
                    
                </div>
            </div>
        </Wrapper>
    ) : "";
}

const Wrapper = styled.header`

.popup{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
}

.popup-inner{
  position: absolute;
  left: 25%;
  right: 25%;
  top: 15%;
  bottom: 17%;
  margin: auto;
  opacity: 1;
  background: white;
  height: 79%;
  border-radius: 10px;
}

.close-btn{
  float: right;
  background: white;
  font-size: 30px;
}

.close-btn:hover{
  cursor:pointer;

}

.datefield{
  display: flex;
  flex-direction: row;
  gap: 5%;
  
}

.span{
  color:black;
  margin-top: 5%;
  font-weight: Bold;
}

.containerfield{

  display: flex;
  flex-direction: column;
  padding:5%;
  margin-top:5%;
}

.txtfield{
  width:60%;
  border: 1px solid black;
}

.txtfield2{
  width: 90%;
  border: 1px solid black;
  height: 5rem;
}

.submit-btn{
    color: white;
    font-size: 16px;
    font-weight:bold;
    background-color: #263A69;
    margin-top: 1%;
    border-radius: 5px;
    line-height: 2rem;
    width: 40%;
    float:center;
}

.submit-btn{
  width: 40%;
}

.submit-btn2{
  color: white;
  font-size: 16px;
  font-weight:bold;
  background-color: #263A69;
  margin-top: 1%;
  border-radius: 5px;
  line-height: 2rem;
  width: 40%;
  float:center;
  margin-left: 32%;
}

.submit-btn:hover{
    cursor:pointer;
}

.datefield3{
  margin-top: 5%;
  width: 60%;
  border: 1px solid black;
}


.navbar{
background: black;
color:white;
display: grid;
grid-template-columns: (5,1fr);
grid-template-rows: (1,1fr);

}

/** Form Example **/

.formtask{
display:flex;
flex-direction:column;
width: 50%;
gap: 10px;
margin-left: 10%;
}

.filefield{
display: flex;
flex-direction: row;
}

.txtfield5{
margin-top: 5%;
margin-left: 7.5%;
}

.image{
border: 1px solid white;
}

/** POPUP A NEW **/

#submit{
margin-top: 1.5rem;
}

#submit:hover{
  cursor: pointer;
}

.signup-content{
height: 41rem;
margin-top: 1rem;
opacity: 1;
}

#description{
height: 5rem;
}

#form-group{
display: flex;
flex-direction: row;
}

.clos-button{
float: right;
}

#buttons{
display: flex;
flex-direction: row;
gap: 1.2rem;
}

`

export default PopupProject;