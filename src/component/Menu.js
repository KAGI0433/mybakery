import React from "react"
import { MenuList } from '../helpers/menuList'

  export const Menu =() => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) =>{
                    return<div></div>
                })}
            </div>
        </div>
    )
}

