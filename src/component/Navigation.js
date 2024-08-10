import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
          <img src="" alt="" className="logo" />
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to= '/menu'>Menu</Link>
        </nav>
    )
}