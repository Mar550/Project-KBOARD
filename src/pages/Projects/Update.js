import React,{useState, useEffect} from "react";
import './Update.css';
import { useParams } from 'react-router-dom';


function Update(props) {

    const[data,setData]=useState([]);
    
    const { id } = useParams();
    console.warn("props",props.match.id)

    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/project/"+props.match.id)
        result = await result.json();
        setData(result)
    })

    return (
        <>
            <h1> Update Project</h1>
            <input type="text" defaultValue={data.name}/>
            <input type="text" defaultValue={data.description}/>
            <input type="date" defaultValue={data.start}/>
            <input type="date" defaultValue={data.end}/>
            <button> EDIT </button>
        </> 
    )
}

export default Update;