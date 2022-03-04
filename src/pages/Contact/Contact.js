import React from "react";
import {AiOutlineEdit} from 'react-icons/ai';
import {RiDeleteBin5Fill} from 'react-icons/ri';
import './Contact.css';
import img from '../../assets/img.jpeg';
const Contact = () => {
    
  return (

    <>
		<div className="projectcontainer">
			<div className="row1">
				<AiOutlineEdit className="icon"/>
				<RiDeleteBin5Fill className="icon"/>
			</div>
			<div className="row2">
			<div className="colleft" >
				<img className="img" src={img}/>
			</div>
			<div className="colright">
				<h1>
					Title: Name of project
				</h1>
				<p>
					Description: Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
				</p>
				<div className="tabledaates">
					<div className="rowdate">
						<p> Starting:</p>
						<p> XX/XX/XXXX </p>						
					</div>
					<div className="rowdate">
						<p> Ending:</p>
						<p> XX/XX/XXXX </p>							
					</div>
				</div>
				<button className="showbutton"> SHOW
				</button>			
			</div>
			</div>
		</div>
    </>
  )
}

export default Contact;