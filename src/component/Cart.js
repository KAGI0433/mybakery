import React from 'react'
import { useCart } from "react-use-cart"
import './Cart.css'

export const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className='text-center'> Your cart is empty.</h1>
    return (
        <section className='py-4 container'>
       <div className='row justify-content-center'>
        <div className='col-12'>
            <h5>Cart ({totalUniqueItems} total Items: ({totalItems}))</h5>
            <table className='table table-light table-hover m-0'>
                {items.map((item, index)=>{
                    <tr key={index}>
                       <td>
                        <img src={items.img} style={{height: '6rem'}} />
                       </td>
                       <td>{items.title}</td>
                    </tr>
                })}

            </table>
        </div>
        
       </div> 
       </section>
        
    );
}