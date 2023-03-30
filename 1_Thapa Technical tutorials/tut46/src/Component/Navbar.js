import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Active = {
  color: 'red',
  fontWeight: '100'
}

const inActive = {
  color: 'blue',
  fontWeight: '100'
}

const styling = ({ isActive, isPending }) => {
  console.log(isActive,isPending)
  
  if(isActive) return Active;
  else return inActive;
}

function Navbar() {
  return (
    <>
      <nav>
        <NavLink 
          style={({ isActive, isPending }) => styling({ isActive, isPending })} 
          to='/' >
            Home 🏡
        </NavLink>
        <NavLink 
          style={({ isActive, isPending }) => styling({ isActive, isPending })} 
          to='/contact' >
            Contact 📞
        </NavLink>
        <NavLink 
          style={({ isActive, isPending }) => styling({ isActive, isPending })} 
          to='/about' >
            About 🐹
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar