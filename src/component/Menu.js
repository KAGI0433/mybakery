import React from "react"
import MenuItem from'./MenuItem'
import MenuList from '../helpers/MenuList'


  export const Menu =()  => {
    return (
        <>
        <h1 className="text-center mt-3">Our Menu</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                 {MenuList.productDate.map((item, index) =>{
                       return(
                        <MenuItem img={item.img} title={item.title} desc={item.desc} price={item.price} key={index} />
                       )
                 })}
                
            </div>

        </section>
        </>
 )
}

