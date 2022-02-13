import React, {useState} from "react";
import styled from 'styled-components'
 

function Popup(props) {
    
    return (props.trigger) ? (
        <Wrapper>
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                    { props.children }
                    <p> This is my Popup</p>
                </div>
            </div>
        </Wrapper>
    ) : "";
}

const Wrapper = styled.header`

.popup{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    opacity:0.7;
  }
  .popup-inner{
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
  }

  .close-btn:hover{
      cursor:pointer;
  }
`


export default Popup;