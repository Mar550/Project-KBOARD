import React, {useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';


function UpdateProject(props)
{
    const [data,setData]=useState([])
    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/project"+props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return(
        <div>
            <h1> Edit Project </h1>
            <input type="text" defaultValue={data.nameproject}/>
            <input type="date" defaultValue={data.start}/>
            <input type="date" defaultValue={data.end}/>
            <input type="text" defaultValue={data.status}/>
            <button> Edit </button>

        </div>
    )
}

export default UpdateProject;