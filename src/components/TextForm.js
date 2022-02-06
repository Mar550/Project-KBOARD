import React,{useState} from "react";
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";

function TextForm() {

  const [inputFields, setInputField] = useState([
    { title: '', 
      description:''
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  }

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
}  

  return (
    <Wrapper>
      <Container>
          <h1> Add New Row </h1>
          <form onSubmit={handleSubmit}>
            { inputFields.map((inputField, index) =>(
                <div key={index}>
                  <TextField
                    name="title"
                    label="Title"
                    value={inputField.title}
                    onChange={event => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="description"
                    label="Description"
                    value={inputField.description}
                    onChange={event => handleChangeInput(index, event)}
                  />
                </div>
                
          )) }
              <button type="submit" onClick={handleSubmit}>
                ADD TASK
              </button>
          </form>
           
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`

`

export default TextForm;