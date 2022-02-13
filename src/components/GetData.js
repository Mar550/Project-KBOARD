import React,{useState} from "react";
import styled from 'styled-components'

function Getda () 
{
    const [data,setData]=useState('');
    const [print,setPrint]=useState(false);

    function getData(val)
    {
        setData(val.target.value)
        setPrint(false)
        console.log(val.target.value)
    }       

    return (
       <Wrapper>
           <div className="App">
            {
                print ?
                <h1>{data}</h1>
                :null
            }
           <input type="text" onChange={getData} />
           <button onClick={()=>setPrint(true)}> Print Value</button>
           </div>
       </Wrapper> 
    )

}

const Wrapper = styled.header`

`

export default Getda;