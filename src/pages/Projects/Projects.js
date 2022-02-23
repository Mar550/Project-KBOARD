import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Projects.css';
import {Card, Button} from 'react-bootstrap';
import imgproject from '../../assets/projectimg.jpeg';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Popup from './PopupProject';

function Projects () {
    
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [start,setStart]= useState("");
    const [end,setEnd]= useState("");
    const [status,setStatus]= useState("");

    const [buttonPopup, setButtonPopup] = useState(false);

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const addProject = async() =>
    {
        const formData = new FormData();
        formData.append('nameproject',name);
        formData.append('datebegin',start);
        formData.append('dateending',end);
        formData.append('status',status);
        let result = await fetch("http://127.0.0.1:8000/api/addproject", {
            method: 'POST',
            body: formData
        });
        alert("The new project has been created")
    }

    const [data,setData]=useState([]);

    const deleteProject = async($id) =>
    {
        let result = await fetch ("http://127.0.0.1:8000/api/delete/"+$id,{
            method:"DELETE"
        });
        result=await result.json();
        console.warn(result)
        setData();
    }

    useEffect( async() => {
        let result = await fetch("http://127.0.0.1:8000/api/listprojects")
        result = await result.json();
        setData(result)
    },[])

    console.warn("result",data)
    return (
        <>
            <h1 className="titre"> My Projects </h1>
            
            <div>
            <div className="create">

            <p> Name  </p><input type="text" className="form-control" placeholder="Project name" onChange={(e)=>setName(e.target.value)}/>
            <p> Descrption </p> <input type="text" className="form-control" placeholder="Project description" onChange={(e)=>setDescription(e.target.value)}/>
            <p> Image </p> <input type="file" className="form-control" placeholder="Project image" onChange={(e)=>setImage(e.target.value)} />
            <p> Start date </p> <input type="date" className="dateinput" placeholder="Start Date" onChange={(e)=>setStart(e.target.value)}/>
            <p> Ending date </p> <input type="date" className="dateinput" placeholder="Ending Date" onChange={(e)=>setEnd(e.target.value)} min={disablePastDate()}/>
            <p> Status </p> <input type="text" className="form-control" placeholder="Status" onChange={(e)=>setStatus(e.target.value)}/>
            <button className="btn btn-primary" onClick={addProject} > Create </button>   
            </div>

            <div className="containercards" >       
                    { 
                        data.map((item)=>
                        <Card className="card" style={{ width: '41vh' }}>
                            <div>
                                <AiOutlineEdit className="actionicon"/>
                                <Link to={"update/"+item.id}>
                                <RiDeleteBin5Fill className="actionicon" onClick={()=>deleteProject(item.id)}/>
                                </Link>
                            </div>
                            <Card.Img  className="img" variant="top" src={imgproject} width="180px"/>
                            <Card.Body className="body">
                            <div className="content"> 
                        <Card.Title className="title" >{item.nameproject}</Card.Title>
                            <Card.Text className="text">
                                The Description...
                            </Card.Text>
                            <Card.Text className="text">
                            <span> Date: </span>
                            {item.date_begin}
                            </Card.Text>
                            <Card.Text className="text">
                            {item.date_ending}
                            </Card.Text>
                            <Card.Text className="text">
                            {item.status}
                            </Card.Text>
                            </div>
                            <Button className="button" variant="primary"> OPEN </Button>                                
                            </Card.Body>        
                        </Card>
                        )} 
                    <div>        
                    <button className="btn-add" onClick={() => setButtonPopup(true)}> New Project </button>
                    <Popup trigger={buttonPopup} setTrigger ={setButtonPopup}  />              
            </div>
            </div> 
            </div>
        </>
    )
}


export default Projects;