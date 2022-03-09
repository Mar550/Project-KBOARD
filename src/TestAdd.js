import React, {useState} from "react";


function Testing() {

    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [start,setStart]= useState("");
    const [end,setEnd]= useState(""); 

    const addProject = async() => {
        console.warn(name,description,image,start,end)
        const formData = new FormData();
        formData.append('nameprojet',name);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('begin',start);
        formData.append('end',end);
        let result = await fetch("http://127.0.0.1:8000/api/create",{
            method:"POST",
            body:formData
        });
        alert("Data has been saved")
    }
    return (
        <>
            <h1> Test Adding Project </h1>
            <div>
                <input type="text" placeholder="Title" onChange={(e)=>setName(e.target.value)}/> <br/>
                <input type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} /> <br/>
                <input type="file" placeholder="Image" onChange={(e)=>setImage(e.target.value)} /> <br/>
                <input type="date" placeholder="Start" onChange={(e)=>setStart(e.target.value)}/> <br/>
                <input type="date" placeholder="End" onChange={(e)=>setEnd(e.target.value)}/> <br/>
                <button onClick={addProject}> ADD PROJECT </button>
            </div>
        </>
    )
}

export default Testing;