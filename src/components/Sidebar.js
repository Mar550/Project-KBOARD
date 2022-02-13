import React, {useState} from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import {TiThMenuOutline} from 'react-icons/ti';
import {AiTwotoneHome} from 'react-icons/ai';
import {FaTachometerAlt} from 'react-icons/fa';
import {AiFillProject} from 'react-icons/ai'
import {MdRoomPreferences} from 'react-icons/md';
import {CgLogOut} from 'react-icons/cg';

function SideBar() {

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
        {
            open? 
            <div>
            <div onClick={handleOpen}>
            <TiThMenuOutline/>
            </div>
            
            <ul className="navlist">
                <li>
                    <a className="menu-item" href="#">
                        <AiTwotoneHome/> 
                    </a>
                </li>

                <li>
                    <a className="menu-item" href="#">
                        <FaTachometerAlt/> 
                    </a>
                </li>
    
                <li>
                    <a className="menu-item" href="#">
                        <AiFillProject/>
                    </a>
                </li>
    
                <li>
                    <a className="menu-item" href="#">
                    <MdRoomPreferences/>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <CgLogOut/>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                    
                    </a>
                </li>
            </ul>
            </div>
            :
            <div>
            <ul className="navlist">
            <li>
                <a className="menu-item" href="#">
                Home
                </a>
            </li>
  
            <li>
                <a className="menu-item" href="#">
                Projects
                </a>
            </li>
  
            <li>
                <a className="menu-item" href="#">
                Preferences
                </a>
            </li>
            <li>
                <a className="menu-item" href="#">
                Contact
                </a>
            </li>
            <li>
                <a className="menu-item" href="#">
                Logout
                </a>
            </li>
            </ul>
        </div>

        }
        
        
        </>
    );
  };
  
  export default SideBar;
  