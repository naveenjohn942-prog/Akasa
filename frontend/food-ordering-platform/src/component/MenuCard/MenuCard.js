import React from 'react'
import "./MenuCard.css"
const MenuCard = ({menuItem, categoryName}) => {
  return (
    
        menuItem?.map((item, i) => {
        console.log(categoryName)
            
            if (!item.category.indexOf(categoryName === 'All' ?"" : categoryName))  {
            return(
                <div className='menucard'>
                <img src={item.image} alt='' className='menucard-img'   />
                <h3 className='menucard-name'>{item.name}</h3>
                <p className='menucard-price'> <sup>&#8377;</sup>{item.price}</p>
                <button className='menucard-button'>Add to cart</button>
              </div>
            ) } else {
                return 
            }
        })
    

  )
}

export default MenuCard
