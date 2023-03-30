import React from 'react'
import '../style/app.css'
import { NavLink } from 'react-router-dom'

const Active = {
  textDecoration: 'underline',
}

const inActive = {
  textDecoration: 'none',
}

const styling = ({ isActive, isPending }) => {
  console.log(isActive, isPending)

  if (isActive) return Active;
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
        <NavLink
          style={({ isActive, isPending }) => styling({ isActive, isPending })}
          to='/search' >
          Search 🔍
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar