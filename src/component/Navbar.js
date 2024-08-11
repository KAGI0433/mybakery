import React from "react";
import logo from './Images/logo.png'
import { Link } from "react-router-dom";
import './Navbar.css'
import { BiCart } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

function Navbar() {
    return (
        <div className="navbar">
        <div className="leftSide">
            <img src={logo} alt="" />
            </div>
        <div className="rightSide">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to= '/menu'>Menu</Link>
        </div>

        <div className="social-icon-cont">
            <div className="headIcon">
            <BiUser className="headIcon-size"/>
            </div>
            <div className="headIcon" >
              <BiCart className="headIcon-size" />
            </div>
            
        </div>

        </div>
    );
}

export default Navbar;