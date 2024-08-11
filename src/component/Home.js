
import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className='home'>
            
            <div className='headerContainer'>
            <h1>MINNIE'S BAKERY</h1>
            <p>FRESH BAKES EVERYDAY!</p>
            
                <Link to='/menu'>
                <button>Shop now!</button>
                </Link>
                  
                   
                
                </div>
                
        </div>
        
    );
}

