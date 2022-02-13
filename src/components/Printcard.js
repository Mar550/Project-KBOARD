import { Container, TextField } from "@material-ui/core";
import React,{useState} from "react";
import styled from 'styled-components'


function Printca() 
{
    const[data,setData]=useState([{
        title: "",
        description: ""
    }]);

    const[print,setPrint]=useState(false);

    function getData(val)
    {
        setData(val.target.value)
        setPrint(false) 
        console.log(val.target.value)
    } 

    return (
        <Container>
        <div className="App">
            {
                print ?
                <h1>{data}</h1>
                :<h1> No data</h1>
            }
        <form onSubmit={getData}> 
            <TextField type="text" name="title" label="Title" onChange={getData}/>
            <TextField type="text" name="description" label="Description" onChange={getData}/>
            <button type="submit" onClick={()=>setPrint(true)}> ADD TASK </button> 
        </form>
        </div>
        </Container>
    )
}



export default Printca;