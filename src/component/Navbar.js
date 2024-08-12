import React, { useState } from "react";
import logo from './Images/logo.png'
import { Link } from "react-router-dom";
import './Navbar.css'

import { BiUser } from "react-icons/bi";
import { BiAlignLeft } from "react-icons/bi";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
        <div className="leftSide" id={openLinks ?  "open" : "close"} >
            <img src={logo} alt="" />
            </div>
        <div className="rightSide">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to= '/menu'>Menu</Link>
        <button onClick={toggleNavbar}>
        <BiAlignLeft />
        </button>

        <div className="social-icon-cont">
            <div className="headIcon">
                <Link to='/Login'>
            <BiUser className="headIcon-size"/>
            </Link>
            </div>
           
            
        </div>
         </div>
        </div>
    );
}

export default Navbar;