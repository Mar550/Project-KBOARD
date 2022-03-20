import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
// import Board from "@lourenci/react-kanban";
import Board from "react-trello";
import './Board.css';
import {BiSearchAlt2} from 'react-icons/bi';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Popupb from "../../components/Popup/PopupB";

function Board3() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [data,setData]=useState([]);

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
        label: data.length,
        style: {
          background: '',
          width: 290
        },
        cards: 
          data
        
      },
      {
        id: "IN PROGRESS",
        title: "IN PROGRESS",
        label: data.length,
        style: {
          width: 290
        },
        cards: [
          {
            id: "Milkk",
            task_name: "Buy milkK",
            date_ending: "29/03/2022",
            description: "2 Gallons of milk at the Deli store"
            
          },
          {
            id: "Plan22",
            task_name: "Dispose GarbageE",
            date_ending: "25/02/2022",
            description: "Sort out recyclable and waste as needed"
          }
        ]
      },
      {
        id: "ON HOLD",
        title: "ON HOLD",
        label: "20/70",
        style: {
          width: 290
        },
        cards: [
          {
            id: "Milkk",
            task_name: "Buy milkK",
            date_ending: "29/03/2022",
            description: "2 Gallons of milk at the Deli store"
          },
          {
            id: "Plan22",
            task_name: "Dispose GarbageE",
            date_ending: "25/02/2022",
            description: "Sort out recyclable and waste as needed"
          }
        ]
      },
      {
        id: "DONE",
        title: "DONE",
        label: "20/70",
        style: {
          width: 290
        },
        cards: [
          {
            id: "Milkk",
            task_name: "Buy milkK",
            date_ending: "29/03/2022",
            description: "2 Gallons of milk at the Deli store"
          },
          {
            id: "Plan22",
            task_name: "Dispose GarbageE",
            date_ending: "25/02/2022",
            description: "Sort out recyclable and waste as needed"
          }
        ]
      }
      
      
    ]
  }
  return (
    <div>
        <div className="pagetitle">
            <div className="divnew">
            <Button variant="contained" className="btn-contained" onClick={() => setButtonPopup(true)}> New Task </Button>
            </div>
            <div className="divsearch">
            <BiSearchAlt2 className="searchicon"/>
            <TextField label="Search a project" className="searchfield"/>
            </div>      
        </div>
      <Board data={databoard} draggable />
      <div>
          <Popupb trigger={buttonPopup} setTrigger ={setButtonPopup} />              
      </div>
    </div>
  );
}

export default Board3;