import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import './Popup.css';
import { setDefaultLocale } from "react-datepicker";
import axios, { Axios } from 'axios';



function Popupb() {

    const [data, setData] = useState({ 
        title: '', 
        description:'',
        starting:'',
        deadline:''
        }
    );
    
    const url="http://127.0.0.1:8000/api/projects/addtask"

    function handleInput(e){
        setData({...data,[e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            title: data.title,
            descripti: data.description,
            starting: data.starting,
            deadline: data.deadline
        })
    }

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/addtask')
        .then(response=>{
            setDefaultLocale(response.data);
        });
      }, [])

    return (
        <>
            <form onSubmit={(e)=> handleSubmit(e)} className="formtask">
                <input onChange={(e)=>handleInput(e)} type="text" name="title" defaultValue={data.title}  placeholder="title" />
                <input onChange={(e)=>handleInput(e)} type="text" name="description" defaultValue={data.description} placeholder="description"/>
                <input onChange={(e)=>handleInput(e)} type="date" name="starting" defaultValue={data.starting} placeholder="starting"/>
                <input onChange={(e)=>handleInput(e)} type="date" name="deadline" defaultValue={data.deadline} placeholder="deadline"/>
                <button type="submit"> ADD </button>
            </form>
        </>
    )
}

export default Popupb;