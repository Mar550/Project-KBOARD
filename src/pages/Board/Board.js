import React,{useState, useEffect} from "react";
import Board from "react-trello";
import './Board.css';
import Button from '@mui/material/Button';
import PopupTask from "../../components/Popup/PopupTask";
import background from '../../assets/backgroundd.png'
import {BsSunFill} from 'react-icons/bs';
import {BsMoonFill} from 'react-icons/bs';
import Switch from "react-switch";

function Board3() {

  
  const [buttonPopup,setButtonPopup] = useState(false);
  const [data,setData]=useState([]);
  const [progress,setProgress]= useState();
  const [theme,setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };
  
  let result = useEffect( async() => {
  let result = await fetch("http://127.0.0.1:8000/api/listtasks")
  result = await result.json();
  setData(result)
  },[])
  console.log(data)


  const databoard = {
    lanes: [
      {
        id: "PLANNED",
        title: "PLANNED",
        label: '',
        style: {
          opacity: '0.8',
          width: 290,
          borderRadius: 5,
        },
        cards: 
          data 
      },
      {
        id: "IN PROGRESS",
        title: "IN PROGRESS",
        style: {
          width: 290,
          opacity: '0.8',
          borderRadius: 5
        },
        cards: [
        ]
      },
      {
        id: "ON HOLD",
        title: "ON HOLD",
        style: {
          width: 290,
          opacity: '0.8',
          borderRadius: 5
        },
        cards: [

        ]
      },
      {
        id: "DONE",
        title: "DONE",
        style: {
          width: 290,
          opacity: '0.8',
          borderRadius: 5
        },
        cards: 
          []
      },     
    ]
  }

  return (
    <div id={theme} className="sectionBoard" >
        <div className="pagetitle">
            <div className="divnew">
            <div className="switch">
            <label id="icons"> {theme === "light" ? <BsSunFill /> : <BsMoonFill className="moon"/>} </label>
            <Switch onChange={toggleTheme} checked={theme === "dark"} className="switch-btn" />
            </div>
            <Button variant="contained" id="addtask" className="btn-contained" onClick={() => setButtonPopup(true)}> New Task </Button>
            </div>  
        </div>
      <Board 
      data={databoard} 
      style={{backgroundColor: 'transparent'}} 
      draggable />
      <div>
          <PopupTask trigger={buttonPopup} setTrigger ={setButtonPopup} />              
      </div>
    </div>
  );
}

export default Board3;