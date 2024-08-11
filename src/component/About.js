import React from "react"
import './About.css'
import Pink from './Images/pink.jpg'


export const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{
                width: "1300px",
                height: "40vh",
                backgroundImage:`url(${Pink})`,
                backgroundSize: "cover",
                backgroundRepeat:"no-repeat",
                }} >
                
            </div>
            <div className="aboutBottom"></div>
            <h1>About Us</h1>
            <p>For the most delightful cakes in Patna, Floral n Cakes is the ultimate destination. Treat yourself today! I hope you have some great memories of homemade baked goods, where the scent of fresh-baked bread or chocolate chip cookies came from a kitchen with people who loved and cared about you. This is where homemade becomes a beautiful description of a place in time that we felt loved, or even safe. If you were lucky enough to experience this with someone special, then you know what I’m talking about. I hope that you feel that way with every order you receive from Angela’s heavenly creations!

            </p>
        </div>
    )
}