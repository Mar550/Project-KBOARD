import React from 'react';
import img from '../assets/404p.png';
import styled from 'styled-components';
import './Error.css'

function Error() {
    return (
        <Wrapper className="background">
            <img src={img} className="img" width="20rem" />
        </Wrapper>
    )
}

const Wrapper = styled.header `

`
export default Error;