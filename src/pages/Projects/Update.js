import React,{useState, useEffect, useNavigate} from "react";
import './Update.css';
import { withRouter } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';

function Update(props) {

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [start,setStart]= useState("");
    const [end,setEnd]= useState("");
    
    
    const[data,setData]=useState([]);

    const updateProject = async () => {
        console.warn(name, description, image, start, end)
        const formData = new FormData();
        formData.append('nameprojet',name);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('date_begin',start);
        formData.append('date_ending',end);
        let result = await fetch(("http://127.0.0.1:8000/api/update/"+props.match.params.id), {
            method: 'PUT',
            body: formData
        });
        console.log({name, description, image, start, end})
        console.log(formData)
        alert(" Project Updated ")
    }

    return (
        <div className="container">
                <h1> Update Project</h1>
                <input type="text" name="nameprojet" value={data} onChange={(event)=>{setName(event.target.value)}} />
                <input type="text" name="description" value={description} onChange={(event)=>{setDescription(event.target.value)}}  />
                <input type="file" name="iamge" value={image} onChange={(event)=>{setImage(event.target.value)}}  />
                <input type="date" name="begin" value={start} onChange={(event)=>{setStart(event.target.value)}} />
                <input type="date" name="end" value={end} onChange={(event)=>{setEnd(event.target.value)}} />
            <button onClick={() => updateProject()} > EDIT </button>
        </div> 
    )
}

export default withRouter(Update);