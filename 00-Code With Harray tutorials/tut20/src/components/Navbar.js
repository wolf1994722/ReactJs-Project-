import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  // import PropTypes from 'prop-types'
  // static PropTypes = { }

  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className='navbar-brand' to={'/'}>
              🐵 NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/about'}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/*'}>
                    Error
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        
      </>
    )
  }
}

export default Navbar
