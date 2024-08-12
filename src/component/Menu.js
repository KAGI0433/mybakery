import React from "react"
import MenuItem from'./MenuItem'
import MenuList from '../helpers/MenuList'
import './Menu.css'

  export const Menu =()  => {
    return (
        <>
        <h1 className="menu">Our Menu</h1>
        <section className="py-4 container">
            <div className="card">
                 {MenuList.productDate.map((item, index) =>{
                       return(
                        <MenuItem 
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        key={index} 
                        
                        />
                       )
                 })}
                
            </div>

        </section>
        </>
 )
}

