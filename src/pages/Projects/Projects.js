import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Projects.css';
import {Card, Button} from 'react-bootstrap';
import imgproject from '../../assets/projectimg.jpeg';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {SiAddthis} from 'react-icons/si';
import { Link } from 'react-router-dom';
import Popup from './PopupProject';
import Popupa from '../../components/Popup/PopupA';

function Projects () {
    
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [start,setStart]= useState("");
    const [end,setEnd]= useState("");

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
        console.warn(name, description, image, start, end)
        const formData = new FormData();
        formData.append('nameproject',name);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('date_begin',start);
        formData.append('date_ending',end);
        let result = await fetch("http://127.0.0.1:8000/api/addproject", {
            method: 'POST',
            body: formData
        });
        alert("New Project created")
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
            <div className="maincontent">
            <h1 className="titre"> My Projects </h1>
            
            <div>
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
                            <Card.Body className="cardbody">
                            <div className="content"> 
                        <Card.Title className="title" >{item.nameproject}</Card.Title>
                            <Card.Text className="text">

                            {item.description}
                            </Card.Text>
                            <Card.Text className="text">
                            <p> Date-begin: </p>
                            {item.date_begin}
                            </Card.Text>
                            <Card.Text className="text">
                            <p> Deadline: </p>
                            {item.date_ending}
                            </Card.Text>
                            </div>
                            <Button className="button" variant="primary"> SHOW </Button>                                
                            </Card.Body>        
                        </Card>
                        )} 
                    <div> 
                    <div>     
                    <Card className="card" style={{ width: '41vh' }}> 
                    <button className="addproject" onClick={() => setButtonPopup(true)}>  <SiAddthis/> </button>
                    </Card>

                    </div> 
                    <Popupa trigger={buttonPopup} setTrigger ={setButtonPopup}  />              
            </div>
            </div> 
            </div>
            </div>
        </>
    )
}


export default Projects;
