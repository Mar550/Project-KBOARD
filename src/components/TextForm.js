import React,{useState} from "react";
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function TextForm() {

  const [inputFields, setInputField] = useState([
    { title: '', 
      description:''
    },
  ]);

  const [print, setPrint] = useState(false)

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
    
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);

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

          <div>

            <h1> {inputFields[0].title} </h1>
            <h2> {inputFields[0].description} </h2>
          </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`

`

export default TextForm;