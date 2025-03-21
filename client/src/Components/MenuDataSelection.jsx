import React from 'react'
import '../Styles/MenuDataSelection.css'
import Food from './Food'
import Drinks from '../Components/Drinks.jsx'

const MenuDataSelection = ({menu}) => {
  return (
    <>
     
    {menu == 'Foods'?
        <Food menu={menu}/>: menu=='Drinks' ?<Drinks menu={menu}/>:''  
    }
    </>
  )
}

export default MenuDataSelection