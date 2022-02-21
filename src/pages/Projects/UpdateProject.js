import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';


function UpdateProject()
{
    const [data,setData]=useState([])
    
    console.warn("props",props.match.params.id)
    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/project"+props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return(
        <div>
            <h1> Update Project </h1>
            <input type="text" defaultValie={data.nameproject}/>
            <input type="date" defaultValie={data.date_begin}/>
            <input type="date" defaultValie={data.date_ending}/>
            <input type="text" defaultValie={data.status}/>
            <button> Update </button>

        </div>
    )
}

export default UpdateProject;