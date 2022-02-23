import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {Nav} from "react-bootstrap";
import './Sidebar.css';
import {GrHome} from 'react-icons/gr';
import {AiOutlineProject} from 'react-icons/ai';
import {MdOutlineContactMail} from 'react-icons/md';
import {MdOutlineRoomPreferences} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';

const Sidebar = (props) => {

    const history = useHistory();

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    const [showSidebar,setShowSidebar] = useState(false)

    function logout(){
        localStorage.clear();
        history.push('/')
    }

    return (
        <>
        {
            localStorage.getItem('user-info') ?
            
            <>

        {showSidebar ? (

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div className="sidebar-sticky">
            
            <div className="divlink" onClick={() => setShowSidebar(!showSidebar)}>
                <GiHamburgerMenu className="icones" />
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

            <div className="divlogout" onClick={logout} >
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

            <div className="divlink" onClick={() => setShowSidebar(!showSidebar)} >
                <GiHamburgerMenu className="iconessmall" />
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

            <div className="divlogout" onClick={logout} >
            <Nav.Item >
                <Nav.Link className="navlink"> <BiLogOut className="iconessmall"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </Nav>
            
            )}
            </>
            :
            <>
            </>
            }
        </>
        );
  };


  export default Sidebar