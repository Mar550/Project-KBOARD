import React,{useState, useEffect} from "react";
import Board from "react-trello";
import './Board.css';
import {BiSearchAlt2} from 'react-icons/bi';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PopupTask from "../../components/Popup/PopupTask";
import {FaBlackberry} from "react-icons/fa";
import background from '../../assets/backgroundd.png'
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';


function Header() {
    const [ darkMode, setDarkMode ] = React.useState(false)
     
    React.useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])
    
    return (
      <header>
        <div
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
          <div className="toggle-inner"/>
        </div>
      </header>
    )
  }
  
function Board3() {

  
  const [buttonPopup,setButtonPopup] = useState(false);
  const [data,setData]=useState([]);
  const [progress,setProgress]= useState();
  const [mode,setMode] = useState()

  
  
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
    <div className="sectionBoard" >
        <div className="pagetitle">
            <div className="divnew">
            <Button variant="contained" id="addtask" className="btn-contained" onClick={() => setButtonPopup(true)}> New Task </Button>
            <Header />
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