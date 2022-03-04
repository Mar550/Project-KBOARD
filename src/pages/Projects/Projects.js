import React, { useState, useEffect } from 'react';
import '../Contact/Contact.css';
import imgproject from '../../assets/projectimg.jpeg';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Popup from './PopupProject';
import Popupa from '../../components/Popup/PopupA';
import img from '../../assets/img.jpeg';
import {GoPlus} from 'react-icons/go';

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
       
        { 
            data.map((item)=>
            <div className="projectcontainer">
                <div className="row1">
                    <Link to={"update/"+item.id}>
                    <AiOutlineEdit className="icon"/>
                    </Link>
                    <RiDeleteBin5Fill className="icon" onClick={()=>deleteProject(item.id)}/>
                </div>
                <div className="row2">
                <div className="colleft" >
                    <img className="img" src={img}/>
                </div>
                <div className="colright">
                    <h1 className="titlep">
                         {item.nameproject}
                    </h1>
                    <h3 className="descriptionp">
                         {item.description}
                    </h3 >
                    <div className="tabledates">
                        <div className="rowdate">
                            <p> Starting:</p>
                            <p> {item.date_begin} </p>						
                        </div>
                        <div className="rowdate">
                            <p> Ending:</p>
                            <p> {item.date_ending} </p>							
                        </div>
                    </div>
                    <button className="showbutton"> SHOW
                    </button>			
                </div>
                </div>
            </div>
        )} 

            <div> 
                <div className="divbtnp">     
                        <button className="btn-add-project" onClick={() => setButtonPopup(true)}>  New Project  </button>
                </div> 
                <Popupa trigger={buttonPopup} setTrigger ={setButtonPopup}  />              
            </div>

            
        </>
    )
}


export default Projects;
