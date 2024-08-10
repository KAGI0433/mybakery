import React from "react"




function menuItem({image, name, price}) {
    return (
        <div className="menuItems">
            <div>{image}</div>
            <h1>{name}</h1>
            <p> ${price}</p>
           
        </div>
    )
}

export default menuItem;