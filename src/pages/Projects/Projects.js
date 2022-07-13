import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PopupProject from '../../components/Popup/PopupProject';
import img from '../../assets/img.jpeg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {BiSearchAlt2} from 'react-icons/bi';
import Swal from 'sweetalert2';


function Projects () {

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [start,setStart]= useState("");
    const [end,setEnd]= useState("");

    const [buttonPopup, setButtonPopup] = useState(false);

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
    useEffect( ()=>{
        getData();
    },[]);

    const deleteProject = async($id) =>
    {
        let result = await fetch ("http://127.0.0.1:8000/api/delete/"+$id,{
            method:"DELETE"
        });
        result=await result.json();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to get is back !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'The project has been deleted.',
                'success'
            )
            setData();
            window.location.reload()
            }
        })
    }

    const getData = async($id) => {
        let result = await fetch("http://127.0.0.1:8000/api/listprojects");
        result = await result.json();
        setData(result);
    }

    const [search, setSearch] = useState("");

    const searchItems = async(key) => {
        setSearch(key)
        console.log(key)
        let result = await fetch(`http://127.0.0.1:8000/api/search/${key}`)
        result = await result.json();
        setData(result)
        console.log(result)
    }

    return (
        <Wrapper> 
            
        <div className="pagetitle">
            <div className="divnew">
            <Button variant="contained" className="btn-contained" onClick={() => setButtonPopup(true)}> New Project </Button>
            </div>
            <div className="divsearch">
            <BiSearchAlt2 className="searchicon" onClick={() => searchItems(search)} />
            <TextField label="Search a project" className="searchfield" onChange={(e) => setSearch(e.target.value)} />
            </div>      
        </div>

        <div className="gridcontainer">
            {                
            (data || []).map((item)=>
            <div className="projectcontainer">
                <div className="row1">
                    <Link to={`editproject/${item.id}`}>
                    <AiOutlineEdit className="icon"/>
                    </Link>
                    <RiDeleteBin5Fill className="icon" onClick={()=>deleteProject(item.id)}/>
                </div>
                <div className="row3" >
                    <div className="divimg">
                    <img className="img" src={img} />
                    </div>
                    <div className="paddingdiv">
                    <h1 className="titlep">
                         {item.nameproject}
                    </h1>
                    <p className="descriptionp">
                         {item.description}
                    </p>
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
                    <Link to="/board">
                    <button className="showbutton"> SHOW
                    </button>	
                    </Link>
                    </div>		
                </div>
            </div>
        )} 
        </div>
        <div> 
            <PopupProject trigger={buttonPopup} setTrigger ={setButtonPopup}/>              
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.header `

.searchicon:hover{
    cursor:pointer;
    font-size: 40px;
}

.pagetitle{
    height: 6rem;
    display:flex;
    flex-direction:row;
    justify-content: end;
    margin-left: 8%;
    gap: 6%;
    margin-top: -40px;
}

.btn-contained{
    margin-top: 11%;
    width: 120%; 
    height: 60%;
    font-size: 21px;
    font-weight: bold;
}

.searchfield{
    margin-top: 9%;
}

.searchicon{
    margin-top: 15%;
    font-size: 35px;
}
.divsearch{
    margin-right: 6%;
}

.projectcontainer{
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    margin-top: 5%;
}

.gridcontainer{
    margin-top: 3%;
    display: grid;
    grid-template-columns: repeat(3,1fr); 
    grid-template-rows: auto;
    margin-left: 10%;
}

.descriptionp{
    color:black;
    line-height: 19px;
}

.row2{
    display: flex;
    flex-direction: row;
    gap: 2%;
    margin-bottom: 25px;
}

.colleft{
    width:70%;
}

.colright{
    width: 70%;
}   

.tabledaates{
    margin-top: 5px;
}


.row1{
    display: flex;
    flex-direction: row;
    justify-items: end;
    justify-content: end;
    gap: 15px;
    color: black;
    margin-top:5px;
}

.icon{
    font-size: 22px;
}

.icon:hover{
    cursor:pointer;
    font-size: 25px;
}

.showbutton{
    background-color: white;
    opacity: 1;
    border: 2px solid black;
    width: 95%;
    margin-top: 10px;
    font-weight: bold;
    font-size: 17px;
    color:black;
    border-radius: 5px;
    height: 3rem;
}

.showbutton:hover{
    background-color: black;
    color:white;
    cursor: pointer;
    font-size: 17px;
}

.img{
    border: none;
    margin-bottom: 10px;
}

.rowdate{
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.divimg{
    margin: 0;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5); 
    width: 80%;
    margin-left: 10%;
    margin-top: 5px;
    border-radius: 5px;
}

hr{
    height: 3px;
    background-color: black;
    width: 100%;
}

.divbtnp{
    margin-top: 70px;
}

.paddingdiv{
    padding: 20px;
}

.btn-add-project{
    margin-top: 20px;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    width: 21%;
    display: block;
    margin-left: AUTO;  
    margin-right: AUTO;
    position: sticky;
    border-radius: 5px;
    height: 3.8rem;
}

.btn-add-project:hover{
    cursor: pointer;
    background-color: white;
    color:black;
    border: none;
}

.pagetitle{
    text-align: center;
    font-size: 130%;
}

.titlep{
    font-size: 160%;
}
`

export default Projects;
