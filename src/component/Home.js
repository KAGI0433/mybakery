
import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className='home'>
            
            <div className='headerContainer'>
            <h2>MINNIE'S BAKERY</h2>
            <h1>FRESH BAKES</h1>
            <h3>EVERYDAY</h3>
                <Link to='/menu'>
                <button>Shop now!</button>
                </Link>
                  
                   
                
                </div>
                
        </div>
        
    );
}

