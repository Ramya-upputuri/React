import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
        <NavLink to='/Service'>Service</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Restaurents'>Restaurents</NavLink>
        <NavLink to='./Products'>Products</NavLink>
      
    </div>
  )
}

export default Navbar
