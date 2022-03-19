import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import imgproject from '../../assets/projectimg.jpeg';
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {BsPlusLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Popup from './PopupProject';
import Popupa from '../../components/Popup/PopupA';
import img from '../../assets/img.jpeg';
import {GoPlus} from 'react-icons/go';
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

    console.warn("result",data)
    return (
        <Wrapper> 
        <div className="pagetitle">
            <div className="divnew">
            <Button variant="contained" className="btn-contained" onClick={() => setButtonPopup(true)}> New Project </Button>
            </div>
            <div className="divsearch">
            <BiSearchAlt2 className="searchicon"/>
            <TextField label="Search a project" className="searchfield"/>
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
                    <hr/>
                    <div className="paddingdiv">
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
                <Popupa trigger={buttonPopup} setTrigger ={setButtonPopup}  />              
            </div>

            
        </Wrapper>
    )
}

const Wrapper = styled.header `

.pagetitle{
    height: 6rem;
    display:flex;
    flex-direction:row;
    justify-content: end;
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
    margin-right: 12%;
}

.projectcontainer{
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    opacity: 0.7;
    box-shadow: 5px 5px 5px 4px  black;
    margin-top: 10%;
}

.gridcontainer{
    margin-top: 3%;
    display: grid;
    grid-template-columns: repeat(3,1fr); 
    grid-template-rows: auto;
    margin-left: 10%;
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
