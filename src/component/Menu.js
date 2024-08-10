import React from "react"
import { MenuList } from '../helpers/menuList'
import { MenuItem } from '../component/MenuItem'


  export const Menu =() => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return (
                    <menuItem 
                    key={key}
                    image={menuItem.image} name={menuItem.name} price={menuItem.price}/>);
                })}
            </div>
        </div>
    )
}

