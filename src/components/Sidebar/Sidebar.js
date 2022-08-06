import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import {Nav} from "react-bootstrap";
import './Sidebar.css';
import {AiOutlineProject} from 'react-icons/ai';
import {MdOutlineContactMail} from 'react-icons/md';
import {MdOutlineRoomPreferences} from 'react-icons/md';
import {AiOutlineHome} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';

const Sidebar = (props) => {

    const history = useHistory();
    const [showSidebar,setShowSidebar] = useState(false);
    let user = JSON.parse(localStorage.getItem('user-info'));

    function logout(){
        localStorage.clear();
        history.push('/');
        history.go(0);

    }

    return (
        <Wrapper>
        {
            localStorage.getItem('user-info') ?
            
            <>

        {showSidebar ? (

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div className="space-between">
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
            </div>
            </Nav>

            ) : (
            
            <Nav className="col-md-12 d-none d-md-block bg-light sidebarsmall"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            
            <div className="space-between">
            <div className="sidebar-sticky">

            <div className="divlink" onClick={() => setShowSidebar(!showSidebar)} >
            <div className="margindiv"> 
                <GiHamburgerMenu className="iconessmall" />
            </div>
            </div>
            
            <div className="divlink">
            <div className="margindiv"> 
            <Nav.Item>
                <Nav.Link href="/home" className="navlink"> <AiOutlineHome className="iconessmall"/> </Nav.Link>
            </Nav.Item>
            </div>
            </div>
            <div className="divlink">
            <div className="margindiv"> 
            <Nav.Item>
                <Nav.Link eventKey="link-1" className="navlink"> <AiOutlineProject className="iconessmall"/> </Nav.Link>
            </Nav.Item>
            </div>
            </div>
            <div className="divlink">
            <div className="margindiv">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineRoomPreferences className="iconessmall"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </div>
            <div className="divlink">
            <div className="margindiv">
            <Nav.Item>
                <Nav.Link eventKey="link-2" className="navlink"> <MdOutlineContactMail className="iconessmall" color="white"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </div>
            </div>

            <div className="divlogout" onClick={logout} >
            <Nav.Item >
                <Nav.Link className="navlink"> <BiLogOut className="iconelogout"/>  </Nav.Link>
            </Nav.Item>
            </div>
            </div>
            </Nav>
            
            )}
            </>
            :
            <>
            </>
            }
        </Wrapper>
        );
  };


  const Wrapper = styled.header `

  .space-between{
    display:flex;
    flex-direction: column;
    gap: 20rem;
  }

  .sidebar {
    position: fixed;
    background-color: black;
    top: 0;
    bottom: 0;
    min-height: 100vh !important;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    width: 13.4rem;
  }
  
  .sidebarsmall {
    position: fixed;
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100vh !important;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    width: 4.8rem;
  }
  
  #sidebar-wrapper{
    min-height: 100vh !important;
    width: 100vw;
    margin-left: -1rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }
  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }
  
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
  
  .navlink{
    list-style-type: none;
    color:white;
    text-decoration: none;
    font-size: 1.05rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    font-weight: bold;

  }
  
  .icones{
    font-size: 1.7rem;
    color:white;
    margin-left: 1.1rem;
    
  }
  
  .iconessmall{
    font-size: 1.7rem;
    color:white;
    margin-left: 1rem;

  } 

  .iconelogout{
    font-size: 1.9rem;
    color:white;
    margin-left: 1.3rem;
  }
  
  .sidebar-sticky{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  
  
  .divlogout{
    height: 3rem;
    display: flex;
    align-items: center;
  }
  
  .divlink{
    height: 3rem;
    display: flex;
    align-items: center;
  }
  
  .margindiv{
    margin-left: 16%;
  }
  .divlink:hover{
    background-color: #1338BE;
    font-weight: bold;
  }
  
  .divlogout:hover{
    background-color: #1338BE;
  }
  
  .logo{
    margin-left: auto;
    margin-right: auto;
  }
    
  `

  export default Sidebar