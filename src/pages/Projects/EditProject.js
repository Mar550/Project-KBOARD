import React, {useState, useEffect, useHistory} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { BsSkipEndBtn } from "react-icons/bs";
import { FiEdit} from "react-icons/fi";
import Swal from 'sweetalert2';

function EditProject(props){

    const { id } = useParams();
    
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [begin, setBegin] = useState('');
    const [end, setEnd] = useState('');


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e) => {
        setImage(e.target.value)
    }
    const handleBeginChange = (e) => {
        setBegin(e.target.value)
    }
    const handleEndChange = (e) => {
        setEnd(e.target.value)
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = {
            nameprojet: name,
            description: description,
            image: image,
            begin: begin,
            end: end
        }
        axios.put(`http://127.0.0.1:8000/api/update/project/${id}`, data)
            .then(reponse => {
                Swal.fire({
                    position: 'right',
                    icon: 'success',
                    title: 'The project has been updated',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }).catch((err)=>{
                console.warn("Something went wrong")
            });
    }
    
    return (
        <>
            <div className="signup-content">
                    <div  id="signup-form" className="signup-form">
                    <h2 className="form-title">Edit Project </h2>
                <div className="form-group">
                    <input type="text" className="form-input"   value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-input"   value={description} onChange={handleDescriptionChange} />
                </div>
                

                <div className="form-group" id="fileavatar">
                    <input type="file" className="form-input"  value={image} onChange={handleImageChange}/>
                </div>

                <div className="form-group" id="form-group">
                    <span className="spanfile"> Starting Date </span>
                    <input type="date" className="form-input" name="begin" value={begin} onChange={handleBeginChange}/>
                </div>

                <div className="form-group" id="form-group">
                    <span className="spanfile"> Ending Date </span>
                    <input type="date" className="form-input" name="end" value={end} onChange={handleEndChange}/>
                </div> 
                
                <div className="form-group">
                    <button  name="submit" id="submit" className="form-submit" onClick={handleUpdate} > UPDATE PROJECT</button>
                </div>
                </div>
                </div>
        </>
    )
}



export default EditProject;
