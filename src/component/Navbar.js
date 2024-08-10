import React from "react";
import logo from './Images/logo.png'
import { Link } from "react-router-dom";

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

        </div>
    );
}

export default Navbar;