import React, {useState,useEffect} from 'react';
import { setDefaultLocale } from 'react-datepicker';
import './Projects.css';
import {Card, Button} from 'react-bootstrap';
import imgproject from '../../assets/projectimg.jpeg';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {SiAddthis} from 'react-icons/si';
import { Link } from 'react-router-dom';

function SearchProject()
{
    const [data,setData]=useState([]);

    async function search(key)
    {
        console.warn(key)
        let result = fetch("http://127.0.0.1:8000/api/search/"+key);
        result = await result.json();
        setData(result);
    }

    const deleteProject = async($id) =>
    {
        let result = await fetch ("http://127.0.0.1:8000/api/delete/"+$id,{
            method:"DELETE"
        });
        result=await result.json();
        console.warn(result)
        setData();
    }
    return (
        <>
            <div>
                    <h1> Search Project </h1>
                    <br/>
                    <input type="text" className="form-control" placeholder="Search Product" onChange={()=>search()} />
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
            </div>
        </>
    )
}

export default SearchProject;