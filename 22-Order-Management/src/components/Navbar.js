import React from 'react'
import { Link } from 'react-router-dom'
import { BiMoviePlay } from 'react-icons/bi'; 
import { FcShop } from "react-icons/fc";
// import { BsShop } from "react-icons/bi";
 
// import logo from '../logo.svg'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className='logo-container'>
          <FcShop></FcShop>&nbsp;
          Order Management
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
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
