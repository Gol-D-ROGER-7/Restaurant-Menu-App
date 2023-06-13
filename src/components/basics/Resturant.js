import React, { useState } from 'react'
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import "./style.css"
import Navbar from './Navbar';

const uniquelist = [
  ...new Set(
  Menu.map((curElem)=> {
    return curElem.category;
  })
), "All",
];

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniquelist)

  const filterItem = (category) => {

    if(category === "All") {
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }
  return (
    <>
     <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
