import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import './Sidebar.css';
import {GrHome} from 'react-icons/gr';
import {AiOutlineProject} from 'react-icons/ai';
import {MdOutlineContactMail} from 'react-icons/md';
import {MdOutlineRoomPreferences} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import imglogo from './assets/logowhite.png';
import {GiHamburgerMenu} from 'react-icons/gi';

const Sidebar = (props) => {
   
    const [showSidebar,setShowSidebar] = useState(false)

    return (
        <>
        {showSidebar ? (

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div className="sidebar-sticky">
            
            <div className="divlink">
                <GiHamburgerMenu className="icones" onClick={() => setShowSidebar(!showSidebar)}/>
            </div>

            <div className="divlink">
            <Nav.Item>
                <Nav.Link href="/home" className="navlink"> <AiOutlineHome className="icones"/> <span className="textsidebar"> HOME </span> </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-1" className="navlink"> <AiOutlineProject className="icones"/> <span className="textsidebar"> PROJECTS </span> </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineRoomPreferences className="icones"/> <span className="textsidebar"> PREFERENCES </span> </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineContactMail className="icones" color="white"/> <span className="textsidebar"> CONTACT </span> </Nav.Link>
            </Nav.Item>
            </div>
            </div>

            <div className="divlogout" >
            <Nav.Item>
                <Nav.Link className="navlink" eventKey="disabled" disabled> <BiLogOut className="icones"/> <span className="textsidebar"> LOGOUT </span> </Nav.Link>
            </Nav.Item>
            </div>
            </Nav>

            ) : (
            
            <Nav className="col-md-12 d-none d-md-block bg-light sidebarsmall"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div className="sidebar-sticky">

            <div className="divlink">
                <GiHamburgerMenu className="iconessmall" onClick={() => setShowSidebar(!showSidebar)} />
            </div>
            
            <div className="divlink">
            <Nav.Item>
                <Nav.Link href="/home" className="navlink"> <AiOutlineHome className="iconessmall"/> </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-1" className="navlink"> <AiOutlineProject className="iconessmall"/> </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineRoomPreferences className="iconessmall"/>  </Nav.Link>
            </Nav.Item>
            </div>
            <div className="divlink">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineContactMail className="iconessmall" color="white"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </div>

            <div className="divlogout" >
            <Nav.Item>
                <Nav.Link className="navlink" eventKey="disabled" disabled> <BiLogOut className="iconessmall"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </Nav>
            
            )}
        </>
        );
  };


  export default Sidebar