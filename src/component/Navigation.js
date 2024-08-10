import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
          
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to= '/menu'>Menu</Link>
        </nav>
    )
}