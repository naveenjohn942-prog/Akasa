import React, { useEffect } from 'react'
import "./Menu.css"
import MenuBar from '../MenuBar/MenuBar'
import axios from 'axios'
import { useData } from '../../context/DataContext'
import MenuCard from '../MenuCard/MenuCard'
const Menu = () => {
    const {data, setData} = useData()
    const getData = async () => {
        const category = []
        const data = await axios.get('http://localhost:9000/inventory/items')
        setData({type: "GET_PRODUCTS", products:data.data})
        data.data?.map((ele, i) => {
              category.push(ele.category)
        })
        setData({type:"GET_CATEGORY", category: [...new Set(category)]})
        console.log(data, data.products)
    }

useEffect(() => {
  getData()
},[])
console.log(data.products)
  return (
    <div className='menu'>
      <MenuBar  category={data.category} setData={setData}/>
      <div className='menu-products-list'>
        <MenuCard menuItem={data.products} categoryName={data.categoryName}/>
      </div>
    </div>
  )
}

export default Menu
