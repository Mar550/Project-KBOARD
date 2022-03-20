import React, {useState, useEffect, useHistory} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { BsSkipEndBtn } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import styled from 'styled-components';

function EditProject(props){

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

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
                    position: 'center',
                    title: 'The project has been updated',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                  })
            }).catch((err)=>{
                console.warn("Something went wrong")
            });
    }
    
    return (
        <Wrapper>
            <div className="signup-content">
                    <div  id="signup-form" className="signup-form">
                    <h2 className="form-title"> <FaEdit/> Edit your project </h2>
                <div className="form-group">
                    <input type="text" className="form-input" placeholder="New name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-input" placeholder="New description"  value={description} onChange={handleDescriptionChange} />
                </div>
                

                <div className="form-group" id="fileavatar">
                    <input type="file" className="form-input"  value={image} onChange={handleImageChange}/>
                </div>

                <div className="form-group" id="form-group2">
                    <span className="spanfile"> Starting Date </span>
                    <input type="date" className="form-input" name="begin" value={begin} onChange={handleBeginChange}/>
                </div>

                <div className="form-group" id="form-group2">
                    <span className="spanfile"> Ending Date </span>
                    <input type="date" className="form-input" name="end" min={disablePastDate()} value={end} onChange={handleEndChange}/>
                </div> 
                
                <div className="form-group">
                    <button  name="submit" id="submit" className="form-submit" onClick={handleUpdate} > UPDATE PROJECT</button>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header `

.signup-content{
    margin-top: 3%;
    width: 50%;
    margin-left: 26%;
    height: 51rem;
}

.signup-form{
    margin-top: 1%;
    width: 140%;
    margin-left: -15%;
}

#form-group2{
    display:flex;
    flex-direction:row;
}

.spanfile{
    margin-top: 5%;
}

.form-submit{
    margin-top: 10%;
}
`

export default EditProject;
