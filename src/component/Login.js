import React from 'react'
import Blur from './Images/blur.jpg'
import { Link } from "react-router-dom"
import './Login.css'
export const Login = () => {
    return (
        <div className='login'>
            <div className='leftSide' style={{
                width: "80vh",
                height: "500px",
                backgroundImage: `url(${Blur})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

            </div>
            <div className='rightSide'>
                <h1>Login</h1>
                <form id='login-form' method='POST'>
                    <label htmlForm="name">Full Name</label>
                    <input name='name' placeholder='Enter full name...' type='text'/>
                    <label htmlForm="email">Email</label>
                    <input name='name' placeholder='email...' type='email'/>
                     <Link to="./Menu">
                       <button>Submit</button>
                     </Link>



                </form>
            </div>

        </div>

    );
}

