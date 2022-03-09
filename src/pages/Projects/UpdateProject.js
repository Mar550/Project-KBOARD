import axios from 'axios';
import React, {useState,useEffect,useNavigate} from 'react';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const UpdateProject = () => {

const history = useHistory();  

const {id} = useParams();

const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [image, setImage] = useState("")
const [start, setStart] = useState("")
const [end, setEnd] = useState("")
const [validationError,setValidationError] = useState({})
const [data, setData] =useState("");


useEffect(() => {
    fetchProject()
},[])

const fetchProject = async () => {
    await axios.get(`http://127.0.0.1:8000/api/project/${id}`).then(({data})=>{
        const { name, description, start, end } = data.project
        setName(name)
        setDescription(description)   
        setDescription(start)     
        setDescription(end)     
    }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
    })
};

const changeHandler = (event) => {
    setImage(event.target.files[0]);
};

    const updateProject = async(e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('_method','PATCH')
        formData.append('name',name)
        formData.append('description', description)      
        formData.append('image', image)
        formData.append('date_begin', start)
        formData.append('date_ending', end)

        await axios.post(`http://127.0.0.1:8000/api/project/${id}`, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            history("/")
        }).catch(({response})=>{
            if(response.status===422){
                setValidationError(response.data.errors)
            } else {
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                })
            }
        })
    }

    return(
        <>
            <h1> Edit Project </h1>
            {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
            <form onSubmit={UpdateProject}>
            <input 
            type="text" 
            value={name} 
            onChange={(event)=>{setName(event.target.value)}}/>

            <input 
            type="text" 
            value={description} 
            onChange={(event)=>{setDescription(event.target.value)}}/>

            <input 
            type="file" 
            onChange={changeHandler}/>

            <input 
            type="date" 
            value={start} 
            onChange={(event)=>{setStart(event.target.value)}}/>

            <input 
            type="date" 
            value={end} 
            onChange={(event)=>{setEnd(event.target.value)}}/>

            <button type="submit"> Edit </button>
            </form>
        </>
    )
}

export default UpdateProject;