

import React from 'react'
import "./Home.css"
import { MdDoubleArrow } from "react-icons/md";
export const Home = () => {
    return (
        <div className='main mx-[320px] mt-[25px]'>
            
            <div className='content-section'>
            <h2>MINNIE BAKES</h2>
            <h1>FRESH BAKES</h1>
            <h3>EVERYDAY</h3>
                <div className='shop-now-btn '>
                   <button>Shop now!</button>
                   <MdDoubleArrow />
                </div>
                </div>
                
        </div>
        
    );
};

