import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className='logo-container'>
          CockTails
          <img src={logo} alt="cocktail db logo" className='logo'/>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
