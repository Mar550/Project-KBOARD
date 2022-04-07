import React from 'react';
import styled from 'styled-components';
import logoerror from '../assets/erreur.png'

function Error() {
    return (
        <Wrapper className="background">
            <div className="divcontain">
            <img src={logoerror} className="logoerror"/>
            <h2 className="errortext"> ERROR </h2>
            <h2 className="errortext2"> PAGE NOT FOUND </h2>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header `

.divcontain{
    border:none;
    display:block;
    margin-left: auto;
    margin-right: auto;
    width: 28%;
}

.errortext{
    font-size: 60px;
}

.errortext2{
    font-size: 40px;
}

.img{
    border: 1px solid black;
    border-radius: 15px;
    opacity: 0.9;
}


`
export default Error;