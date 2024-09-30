import React, { useEffect } from 'react'
import "./CartList.css"


const CartList = ({cart}) => {

  return (
 
      <ul className='cart-list'>
        {cart?.map((item, index) => {
               return (
                <li key={item.itemId} className='cart-list-items'>
   
                <img src='https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg' className='cart-list-image' />
                <div className='cart-list-info'>
                <p className='cart-list-name'>{item.itemName}</p>
                <span className='cart-list-btn'> <button>+</button>{item.quantity} <button>-</button></span>
                </div>
               <p className='cart-list-price'>{item.price}</p>
            
        </li>
               )
        })}

      </ul>
 
  )
}

export default CartList
